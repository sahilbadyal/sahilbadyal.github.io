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
    padding: 15px 26px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
  }

  .linkbtn {
    background-color: #BADA55;
    border: none;
    color: white;
    padding: 3px 6px;
    text-align: center;
    text-decoration: none;
    font-size: 10px;
   }

  .img-responsive {
    width: 30%;
    float: left;
    padding: 4%;
  }
</style>

![xkcd](assets/images/progeny.png){:class="img-responsive"}


I am Sahil Badyal, currently a graduate researcher at the [REACT Lab](https://gil.engineering.asu.edu/react-lab-members/){: target="_blank"}, Harvard University (previously at [Arizona State University](https://www.asu.edu){: target="_blank"}). I recently interned at [Capital One](https://capitalone.com){: target="_blank"}, as a Data Scientist in the Vision and Language Technologies Team (VaLT). I also have more than three years of professional experience in Software Development and Machine Learning. I was born and raised in [Billawar](https://en.wikipedia.org/wiki/Billawar){: target="_blank"}, [Jammu and Kashmir](https://en.wikipedia.org/wiki/Jammu_and_Kashmir){: target="_blank"}, India.

I am a computer science enthusiast, interested in reinforcement learning, robot-learning, multi-modal machine learning, and NLP. 

[CV](https://s3-ap-southeast-1.amazonaws.com/sahilbprojects/my-blog/Sahil_Badyal_resume.pdf){: .btn target="_blank"} [GitHub](https://github.com/sahilbadyal){: .btn target="_blank"}  [LinkedIn](https://www.linkedin.com/in/sahilbadyal){: .btn target="_blank"} [Publications](https://scholar.google.co.in/citations?hl=en&user=T65KqaMAAAAJ){: .btn target="_blank"}

### My Posts ###

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

