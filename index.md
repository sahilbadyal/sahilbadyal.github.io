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


I am Sahil Badyal, a deep learning enthusiast and Machine Learning Engineer at [Roposo](https://www.roposo.com) in Gurgaon. I completed by bachelors in computer science from [National Institute of Technology, Hamirpur](http://nith.ac.in). My home town is [Billawar](http://en.wikipedia.org/wiki/Billawar) in [Jammu and Kashmir](http://en.wikipedia.org/wiki/Jammu_and_Kashmir), where I have spent much of my childhood.

I am currently interested in Natural Language Processing and applications of Deep Learning in video to text translations for Signlanguage. [DatumFund.com](https://www.datumfund.com) is an initiative in this direction.

[CV](https://s3-ap-southeast-1.amazonaws.com/sahilbprojects/my-blog/Sahil_Badyal_resume.pdf){: .btn target="_blank"} [GitHub](https://github.com/sahilbadyal){: .btn target="_blank"}  [LinkedIn](https://www.linkedin.com/in/sahilbadyal){: .btn target="_blank"} [Publications](https://scholar.google.co.in/citations?hl=en&user=T65KqaMAAAAJ){: .btn target="_blank"}
 

### My Posts ###

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

