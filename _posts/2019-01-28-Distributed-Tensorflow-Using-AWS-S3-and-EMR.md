---
layout: post
title: "Distributed Tensorflow using AWS S3 and EMR"
description: "How to get started in distributed machine learning using one of the most popular ML framework by Google and AWS infrastructure"
category: [technology]
tags: [deeplearning,ai,machinelearning,tensorflow,distributed,aws,aws s3,aws emr,training,training speedup,technology]
---
{% include JB/setup %}

<style type="text/css">
  .img-responsive {
    width: 100%;
    float: center;
    padding-right: 15%;
  }
</style>

In this data age, there is no doubt that getting information and valuable insights has become one of the most crucial tasks. Not only the companies like Google, Facebook, Microsoft who are leading the research in deep learning and artificial intelligence but virtually every tech startup today has an ML pipeline setup for easing their business processes, getting insights on customer behavior, improving customer experience etc. The huge data, combined with the power of GPU, deep learning has taken us a step closer to achieving human-like performance in some of the tasks like image classification, speech recognition, self-driving cars etc. But since the power of hardware on a single machine is limited (costly as well), going distributed seems the only way to go ahead further. Majority of the ML frameworks have already provided distributed support but when it comes to scalability and production ready scenarios Distributed Tensorflow is probably the one in the lead. Cloud services like Amazon AWS, Google GCP have support for running distributed Tensorflow cluster, which undoubtedly has made things quite easy and standard. So, if you are dealing with the problem of horizontally scaling your ML training pipeline, you may continue reading this post and my learnings would hopefully prove useful.

First and foremost, you would require a cluster of machines for running distributed training (I would recommend AWS EMR for its just pricing on spot instances). Once you have the cluster up and running with Tensorflow with version no less than 1.12, things are pretty much easier to implement. Tensorflow has eased the process of running its distributed training if you use the TF Estimator API. Estimator API abstracts all the low-level session related nuances and hence you can focus only on your model architecture and training logic. The only thing left for us to make it distributed is to set up an environment variable `TF_CONFIG` and also set up the data pipeline using tf.data API. Before configuring `TF_CONFIG` environment variable lets first understand some important TF distributed terms:

1.  **Worker:** Workers are the machines which store stateless nodes and perform compute intensive operations using local CPU/GPU.
2.  **Chief:** Chief is the master server of the distributed Tensorflow architecture and coordinates the distributed training strategy while also acting as a worker.
3.  **Parameter Server (ps):** This server stores all the variables required and workers interact with PS and network bandwidth between them is an important parameter to decide the number of parameter servers to be used.
4.  **Cluster Spec:** This is the specification which tells the master which node is assuming which role in the cluster. `TF_CONFIG` contains cluster spec marked by "cluster" key.
5.  **Evaluator:**  Evaluator is not a part of cluster spec and a separate task needs to be assigned to a separate machine in Tensorflow.
6.  **Job/Task:** Task in Tensorflow can be of a chief, worker, ps or evaluator job type. Task has an index. 
7.  **Index:** Index is the identification of the machine wrt the cluster. For example, Worker1 would have index 0, Worker2 would have index 1. Same goes for PS and evaluators.
8.  **Client:** Client is a program which generated a Tf.graph and calls tf.Session.

Typical TF architecture looks like this:

![tensorflow architecture (src:Tensorflow)](../../../../assets/images/tf_arch.svg){:class="img-responsive"}

Src:Official Tensorflow Documentation

More information about architecture [here](https://www.tensorflow.org/guide/extend/architecture)

### Distributed Traning in Tensorflow: 
Tensorflow exploits data parallelism through graph replications

#### Types of Replication:
1. **In-graph Replication:**
    Single client (usually on the master server) builds the tf.graph and coordinates with ps and workers.
2.  **Between-Graph Replication:**
     Each worker has a client and similar tf.graph for itself and uses the  parameter server to store and get variables. This is the default replication type in Tensorflow.

#### Types of training:
1.  **Synchronous Training:**
     In this type of training, each client reads the same variables from the ps and then applies computations and then synchronously writes the updates to the ps. This is compatible with both replication types.
2. **Asynchronous Training:**
     Each client runs a training loop independently and updates the parameters in the ps. This is also compatible with both replications. This is the default training type

More information [here](https://github.com/tensorflow/examples/blob/master/community/en/docs/deploy/distributed.md)

So `TF_CONFIG` variable looks like this on my Master machine (in `~/.bashrc`): 
```bash
export TF_CONFIG='{ "cluster": { "chief": ["172.30.11.50:2222"], "worker": ["172.30.11.219:2222","172.30.11.11:2222","172.30.11.127:2222","172.30.11.108:2222","172.30.11.195:2222","172.30.11.215:2222","172.30.11.249:2222"], "ps": ["172.30.11.95:2222","172.30.11.149:2222"] }, "task": {"type": "chief", "index": 0} }'
```

**Remember that the environment variable `TF_CONFIG` would be different for every machine especially the "index" bases on the role or task the machine is performing**

This environment variable needs to be set on every machine of the cluster and the corresponding index should be set. I used [this](https://gist.github.com/sahilbadyal/aedb1d355d78f7cfea0258d241e54306) simple boot script on my AWS EMR cluster. You also need to make sure your data pipeline is ready for distribution.
### Data Pipeline
Following things need to be done:

#### 1. Input data stored on S3/HDFS/(Any other filesystem)  (so that every machine can access ).
#### 2. Sharding the data, so that every worker gets its unique subset of data.

To shard dataset use:
```
dataset = dataset.shard(TOTAL_WORKERS, WORKER_INDEX)
```
`WORKER_INDEX` here is not the task index in `TF_CONFIG`, because we need to take into account that chief is also a worker so its index would be 0 and Worker1 index would be 1, so on and so forth. This is an important step as this ensures true data parallelism. [Here](https://www.tensorflow.org/guide/performance/datasets) are the best practices for data pipeline.
#### 3. Implement the rest of the data pipeline as you like and call estimator train and evaluate API. 
#### 4. Storing the model/result in S3/HDFS/(Any other filesystem) (accessible from the cluster)

The good thing with Tensorflow is that surprisingly it has a good S3 connector, so I recommend using that.  To use Tensorflow with S3, just add the following:
1. In your `~/.bashrc`:
	```bash
	export AWS_REGION=<your region>
	```
	```bash
	export S3_ENDPOINT=s3.<your region>.amazonaws.com
	```
2.  Your AWS credentials in `~/.aws/credentials` file

Now all you need to do is run Tensorflow on all the machines (again I recommend using a script as I did [here](https://gist.github.com/sahilbadyal/3990fe16712cd670e6b39460960e6377)) and voila! you will enter the world of distributed deep learning. 

Also to run Tensorboard on this distributed cluster, just pass the path to the model output directory (S3).

On AWS EMR this would look like this:

```python
python3 -m tensorboard.main --logdir=s3://<path-to-model-output>
```
I hope this has been a useful read for you. Please leave your feedback in the comment section below. 

P.S.

Here are a few links which I found useful:

1. [Google I/O 2018](https://www.youtube.com/watch?v=bRMGoPqsn20)
2. [amid.fish (Distributed Tensorflow)](http://amid.fish/assets/Distributed%20TensorFlow%20-%20A%20Gentle%20Introduction.html)
3. [Tensorflow](https://tensorflow.org)
4. [Scaling up with Distributed Tensorflow on Spark](https://towardsdatascience.com/scaling-up-with-distributed-tensorflow-on-spark-afc3655d8f95)

