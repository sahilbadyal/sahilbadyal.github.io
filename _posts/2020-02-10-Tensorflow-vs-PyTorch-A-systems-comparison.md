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

Today Tensorflow and PyTorch are the most widely used and have found their niche in the industry and academia respectively. But why is that? To answer this I recently tried to compare these frameworks with respect to their system architecture and design philosophy. So, this article is not about which one is better in performance (or will train your model 10 seconds than the other), it is more about why they are better than the other in some aspects. Tensorflow’s latest version is Tensorflow Eager or 2.0 which supports eager execution and hence is more close to its counterpart than ever.

Here is why this comparison is important more than ever:

* Both are highly popular systems which have been successful in penetrating the market of domain-specific languages (DSLs) for differentiable programs through their features.
* As mentioned above as well, both are more closer than ever as they now support imperative style of programming.

Along with these two reasons, their similarity now also brings their differences and performance comparisons to light. The predilection of the research community towards PyTorch can now be understood and explained in a better way.

## Tensorflow Eager

Tensorflow Eager is an upgraded version of the Tensorflow [4], which supports eager execution that was not available in the predecessor.  The reason for its development is rooted in the wide popularity of PyTorch in the research community for rapid prototyping which Tensorflow lacked.  Tensorflow Eager works as an imperative front-end to Tensorflow that executes the operations immediately and it also includes a JIT (just in time) tracer that translates the python functions to data flow graphs.  It is available as an opt-in extension to Tensorflow.

### Pros

* Imperative  and  Pythonic  programming  along  with  the  support  for  thee arlier declarative style.
* Since it is still has all features of Tensorflow, it supports distributed training architecture with the ability to control the device placements etc.
* It has an excellent abstraction layer for the underlying hardware like CPU, GPU, TPU, etc.

### Cons

* Since its an extension to the predecessor, still it adds an additional cost of learning the declarative style of Tensorflow or at the very least be familiar with it.
* In the paper its shown that Tensorflow Eager performs at par with Tensorflow, it means that it has low throughput as Tensorflow.

## PyTorch

PyTorch is one of the most successful DSLs in the research community because of  its  imperative  design  and  a  high  performing  C++  back-end.   Their  design philosophy is centered around enabling experimentation and research (though sometimes) at the cost of some performance.

### Pros

* Imperative and Pythonic programming.
* Performance is as good as (if not the best) one of the best DSL around.Outperforms Tensorflow on throughput.
* Simplicity

### Cons

* Since it is centered around research and rapid prototyping, its deployment and inference model is not as good as Tensorflow.  This means that it is not a first choice of industry based on applications.
* The  Garbage  collector  is  designed  to  work  only  around  languages  that utilize reference counting mechanism like Swift, Python, C++, etc.  but not scripting languages like Lua).
* There is a one pool stream design assumption which can break if there aremultiple streams of tensors (which according to them never happens).

## Similarities in the frameworks

### Design Principles

* Both champion a Pythonic design.

### Features

* Auto differentiation
* Imperative and Pythonic programming
* Both provide parallel execution.  PyTorch relies on multi-processing module of Python where as Tensorflow inherently supports parallelism due to its data flow graph design.
* Both now use simple control flows i.e while loops and if statements are now simpler.

## Differences in the frameworks

### Design Principles

* PyTorch believes in the philosophy of ”Worse is better”, where as Tensorflow Eager design principle is to stage imperative code as dataflow graphs.
* PyTorch is designed for the research community in mind whereas Tensor-flow Eager still focuses on the industrial applications.


### Features

* The design of control and data flow implementation is very different forboth the networks.  PyTorch uses Python for control and and C++ counterpart LibTorch for data flow.
* Tensorflow Eager still can use staged dataflow graph based computation whereas PyTorch has no such feature.

## Learnings

Reading these papers I have a few learnings which I would like to share:

* Design Principles have a huge impact on the final product and its market (niche, share etc).
* Usability and Performance although are a part of tradeoff but still withsome good design and engineering can be both increased.
* Declarative Style of Programming seems to be taking a back seat as evident with Tensorflow that most programmers just want to use the languages they are most comfortable in.

In  the  end  I  want  to  conclude  that  both  these  frameworks  are  excellent examples of engineering and it will be interesting to seethe future trends in their market share.I hope this has been a useful read for you. Please leave your feedback in the comment section below. 

P.S.

Here are a few links which I found useful:

1. [Tensorflow Eager Paper](https://arxiv.org/abs/1903.01855)
2. [PyTorch Paper](https://papers.nips.cc/paper/9015-pytorch-an-imperative-style-high-performance-deep-learning-library)
3. [Tensorflow](https://tensorflow.org)
4. [PyTorch](https://pytorch.org/)
5. [Domain Specific Languages](https://dl.acm.org/doi/10.1145/242224.242477)
