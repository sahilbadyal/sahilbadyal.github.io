---
layout: post
title: "If the evolution was a deeplearning algo"
description: "Selfmusing thoughts on an analogy between the life,evolution and deeplearning"
category: [philosophy,technology]
tags: [philosophy,ai,deep learning,life,evolution,science]
---
{% include JB/setup %}


This bizarre thought came to me when I stumbled upon a tweet by some famous celebrity whom I follow on Instagram. The post was about the importance of daily workout, due to the fact that Human body has been evolved to walk 10 miles per day (on an average of course), and if we do not spend enough energy, our metabolism alters and we suffer from consequences we all know.

But our lifestyle has changed in the last century with the advancements in transportation and communication technology. We are no longer accustomed to walking 10 miles, I highly doubt even 1-2 miles. With our bodies not genetically evolved for this change, are we moving towards the doom of homo sapiens? With technologies like VR, it's quite possible we might never have to walk again. We could comfortably sit on our sofa and be anywhere we want; do anything we wish. Or like the ever-evolving creatures that we are, our genes will learn and adapt to this lifestyle. It is this "learning capability" of all life forms that made me pen down this analogy. But I am not the first one, historically AI has been inspired by evolution, notably, Genetic Algorithms exploit this amazing phenomenon to explore search space and finding an optimal solution. But, this article is a reverse analogy and maps deep learning and evolution.

You might want to know about (deeplearning)[https://en.wikipedia.org/wiki/Deep_learning] if you are unaware. So, let's assume life is indeed a big deep learning model, trying to optimize a cost function. But what? Answering this is the root of this analogy. But let's defer it for now and move on to evolution first. Wikipedia defines evolution as "a change in the heritable characteristics of biological populations over successive generations". Notice here, how words "change", "heritable characteristics of biological populations", "over successive generations" easily map to "change","parameters","epocs/iterations". So, the very definition is easily mapped to a deep learning. This is a good start, time to dig deep into this analogy.

Darwin in his book ("The origin of Species")[https://en.wikipedia.org/wiki/On_the_Origin_of_Species] talks about two main points:
1.  All life on Earth is connected and related to each other
2. Modifications of populations by natural selection, where some traits were favored in an environment over others

What this means is that firstly,  all life forms are the product of a single algorithm, i.e there is only one model being trained/optimized. Secondly, the difference in life forms is due to external inputs (environment). So, all present life forms are just intermediate representations in this big evolution model. Some representations are grouped under mammals, others under reptiles, the ones underwater are fishes, skies belong to the birds and rest are amphibians. We are all related as we originated from same initial representations during our initial epocs. This deep learning model stores all its information in Genes of beings, these genes contain all the information about life like the parameters of a model.

But we cannot define epoc until we define the output. The output is the present state of life. But if this is true, then it means there are parallel epocs running. All these parallel epocs, share some parameters and change the internal representation according to the inputs they are being exposed to. This branching model of epocs with some different parameters and some shared parameters leads to change in outcomes. Else, the outcome would have been static.  

This model, does not need separate training as it continuously trains by the birth of an instance/epoc, using/sharing same parameters as previous instance/epoc or instances/epocs. This core gene (or parameters) are getting trained/improved as the environment is changing to optimize a function called survival function.

Survival function has to be maximized for any epoc.  The ultimate aim of evolution is to increase the survival. Loss function will be inverse of Survival function which is extinction function. But like every algorithm, some features/representations are unable to optimize this function and hence are erased and replaced by new representations.

Since this entire architecture is having layers of parameters, with every layer holing feature representation, and having tree-like structure, it is quite apt to call it a  deep learning algorithm. I am quite sure we will keep evolving and adjusting until this  model is killed by OOM. In that case I hope we will find a new machine to run this model.

In the words of Elon Musk

>"It's OK to have your eggs in one basket as long as you control what happens to that basket."
 
