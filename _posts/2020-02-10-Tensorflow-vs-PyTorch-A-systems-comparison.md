---
layout: post
title: "Tensorflow Eager vs Pytorch - A systems comparison"
description: "What is the reason for Tensorflow's dominance in the industry while PyTorch's domination in the Research community"
category: [technology]
tags: [deeplearning,ai, machinelearning, architecture, systems, auto-differentiation frameworks,fromeworks, tensorflow, pytorch,technology]
---
{% include JB/setup %}

<style type="text/css">
  .img-responsive {
    width: 100%;
    float: center;
    padding-right: 15%;
  }
</style>


![TF Eager VS Pytorch](../../../../assets/images/TF_vs_Pytorch.jpg){:class="img-responsive"}

Deep Learning has changed how we look at Artificial Intelligence. Once studied by a few researchers in the four walls of AI Labs of the universities has now become banal and ubiquitous in the software industry. Most people attribute Moore’s Law and increase in the memory on our computing devices along with the development of GPU for this feat, but there is another significant yet underrated and under-discussed factor that has equal if not more impact on the adaptation and popularity of deep learning. These are the deep learning frameworks. You might know them as Tensorflow, PyTorch, Caffe, etc. but whatever is your favorite I bet you know how important these auto-differentiation software are today in research work in the industry or academia.

Today Tensorflow and PyTorch are the most widely used and have found their niche in the industry and academia respectively. But why is that? To answer this I recently tried to compare these frameworks with respect to their system architecture and design philosophy. So, this article is not about which one is better in performance (or will train your model 10 seconds than the other), it is more about why they are better than the other in some aspects. Tensorflow’s latest version is Tensorflow Eager or 2.0 which supports eager execution and hence is more close to its counterpart than ever. Here  is my analysis:


I hope this has been a useful read for you. Please leave your feedback in the comment section below. 

P.S.

Here are a few links which I found useful:

1. [Google I/O 2018](https://www.youtube.com/watch?v=bRMGoPqsn20)
2. [amid.fish (Distributed Tensorflow)](http://amid.fish/assets/Distributed%20TensorFlow%20-%20A%20Gentle%20Introduction.html)
3. [Tensorflow](https://tensorflow.org)
4. [Scaling up with Distributed Tensorflow on Spark](https://towardsdatascience.com/scaling-up-with-distributed-tensorflow-on-spark-afc3655d8f95)

