---
layout: post
title: "How we developed a Sentiment Prediction model at Ameyo"
description: "The steps taken by our team at Ameyo to deveop the sentiment prediction model"
category: [technology]
tags: [deeplearning,ai,machinelearning,nlp,ameyo,technology]
---
{% include JB/setup %}

<style type="text/css">
  .img-responsive {
    width: 33%;
    float: right;
    padding-right: 15%;
  }
</style>

In June 2016, the ML team at Drishti Soft Solutions Pvt. Ltd called “Singularity” took upon the challenge to make a highly accurate sentiment prediction engine, which would be used to prioritize the inbound emails at the contact centers.  Since the company’s core product Ameyo is a contact center software with omni channel communication interface for channels like email, social media, voice calls in both inbound and outbound settings, getting email data was not a huge challenge. The initial research and comparative study was done to use different machine learning  methods of getting high accuracy in the task. It was finally decided that using neural networks was the way to go.

I joined the team in September and was straight away assigned to the task but I had very limited knowledge and understanding of the field So, my mentor Bikramjit Roy, suggested me a course by Stanford University titled “Natural Language Processing with Deep Learning (CS224n)”. It wouldn’t be wrong to say that this course proved immensely helpful for the achievement of this objective. The proof of concept of using GloVe representation and a rnn network was already done by two interns before me, nevertheless I still had to research ways to increase the accuracy and implement the final solution on a production setup.

First task was getting the email data labelled/tagged for sentiments. Every person in this field would agree that labeling the data is one of the most important and time consuming (in some ways the most boring) task in the process. Since this task required human judgements, we first thought of using data labeling platforms like figure-eight, payment, mechanical turk (to name a few) but we soon realized, that would unnecessarily increase the project timelines and budget. Hence we came up with a next best approach - use the power of existing predictive models for tagging. I know at first it might sound absurd, but the idea was to deploy the model, make sure it has a decent accuracy, get few clients using it, and then slowly and iteratively involve human tagging for better results. This was a part of fail fast approach which we all agreed upon. Hence, we used Google, Azure, IBM watson for tagging the emails and finally added high confidence (which at least two of the three agree on) examples to our dataset. Using this technique we prepared a dataset of 50000 high confidence email- sentiment label pairs. The data set was balanced with same number of sentences in positive and negative sentiment categories.

Next challenge was cleaning the emails. Email cleaning can be tricky as emails generally are in HTML format with content wrapped in various tags, ids and classes, which are again dependent on the source of the email, browser, mailbox etc. Also they contain some greetings like “Hello”, “Regards” etc which do not contribute to the real sentiment of the email at times. We used a java library called Jsoup which makes html parsing smooth and easy. As our preprocessing and feature extraction pipeline was on a java server, jsoup proved to be an important tool as we extracted email subject and body easily through this while removing all the tags. After we extracted the email text, we then removed the signatures and greetings from the email using a set of words representing frequent email greetings. This completed the data cleaning process. The feature extraction just included getting the Glove representation of the words in a single email. We used the 350 dimension vectors generated through common crawl having 50 billion tokens. We limited the input layer size by taking only first 200 words from the email, as we verified that in most of the negative sentiment emails the sentiment is evident from the initial 100-200 words.

The network architecture was rather simple and consisted of a single layer of 64 LSTM units, followed by a fully connected layer which had a single neuron at the output. Using “tanh” nonlinearity the output was being squashed in -1 to 1 interval to get the sentiment along with a degree measure. We implemented this network in tensorflow as it had been tested in production environments and scales well. I already had apt knowledge of working on tensorflow and knew its serving architecture, but it was the first time I was about to implement this keeping in mind the scalability and production scenarios.

The training was done on the dataset split into train, cross-validation and test datasets. The model showed excellent ability to predict the sentiments with an F1 score greater than 0.85 in both positive and negative sentiment categories on the test set. Even on the production server,the new data being tagged with an impressive 88% accuracy (of-course this accuracy was with respect to the 3-way high confidence tagging and not human judgement).

This was indeed an enriching experience but I feel a lot more can be explored in this problem to even further increase the accuracy. I am keen on improving my knowledge in this domain and I hope that reading this post will give you an idea to go about and start on this problem.

Here are a few links which I found useful:

1. [CS224n](http://web.stanford.edu/class/cs224n/syllabus.html)
2. [Sentiment Analysis using LSTM (Towards DataScience)](https://towardsdatascience.com/sentiment-analysis-using-rnns-lstm-60871fa6aeba)
3. [Tensorflow](https://tensorflow.org)

