---
layout: page
title: Hello Everyone!
tagline: know me more :)
---
{% include JB/setup %}

<style type="text/css">
  .btn {
    background-color: #BADA55;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
  }

  .img-responsive {
    width: 24%;
    float: left;
    padding-right: 4%;
  }
</style>

![sahilbadyal](assets/images/sahil_badyal.JPG){:class="img-responsive"}


I am Sahil Badyal, and I am pursuing MS in Computer Science from [Arizona State University](https://www.asu.edu){: target="_blank"}.I am deep learning enthusiast and have three years of experience in Software Development and Machine Learning. I was born and raised in [Billawar](https://en.wikipedia.org/wiki/Billawar) in [Jammu and Kashmir](https://en.wikipedia.org/wiki/Jammu_and_Kashmir){: target="_blank"}, India.

I am currently interested in computer vision, multi-modal machine learning, control and coordination of multi-robot systems. 

[CV](https://s3-ap-southeast-1.amazonaws.com/sahilbprojects/my-blog/Sahil_Badyal_resume.pdf){: .btn target="_blank"} [GitHub](https://github.com/sahilbadyal){: .btn target="_blank"}  [LinkedIn](https://www.linkedin.com/in/sahilbadyal){: .btn target="_blank"} [Publications](https://scholar.google.co.in/citations?hl=en&user=T65KqaMAAAAJ){: .btn target="_blank"}

Fall 2019 courses at ASU:

1. [CSE 551 - Advanced Algorithms](https://www.public.asu.edu/~ccolbou/src/cse551f19.html)
2. [CSE 591 - Control and Co-ordination of Multi-Robot Systems](https://test-stephanie-gil.pantheonsite.io/wp-content/uploads/2017/12/ASU-Robotics-Seminar-Course-short.pdf) 
3. [CSE 575 - Statistical Machine Learning](https://asuonline.asu.edu/docs/cse_575.pdf)

### My Posts ###

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

