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
    padding: 15px;
  }

  .text-justify {
    text-align:justify
  }
</style>

[![src:https://imgs.xkcd.com/comics/progeny.png](assets/images/progeny.png){:class="img-responsive"}](https://xkcd.com/894/){: target="_blank"}


I am Sahil Badyal, an NLP data scientist working with the Vision and Language Technology (VaLT) team at [Capital One](https://capitalone.com){: target="_blank"}.  Additionally, I am involved in a RL research at the [REACT Lab](https://react.seas.harvard.edu/){: target="_blank"}, Harvard University (previously at [Arizona State University](https://www.asu.edu){: target="_blank"}). I have more than three years of professional experience in Machine Learning and Software Development. I was born and raised in [Billawar](https://en.wikipedia.org/wiki/Billawar){: target="_blank"}, [Jammu and Kashmir](https://en.wikipedia.org/wiki/Jammu_and_Kashmir){: target="_blank"}, India. 
{: .text-justify}

I am a computer science enthusiast, interested in reinforcement learning, robot-learning, multi-modal machine learning, and NLP.
{: .text-justify}

[CV](https://s3-ap-southeast-1.amazonaws.com/sahilbprojects/my-blog/Sahil_Badyal_resume.pdf){: .btn target="_blank"} [GitHub](https://github.com/sahilbadyal){: .btn target="_blank"}  [LinkedIn](https://www.linkedin.com/in/sahilbadyal){: .btn target="_blank"} [Publications](https://scholar.google.co.in/citations?hl=en&user=T65KqaMAAAAJ){: .btn target="_blank"}

### My Posts ###

<ul class="posts">
  {% assign categories_list = site.categories %}
  {% if categories_list.first[0] == null %}
    {% for category in categories_list %}
      <li><a href="{{ site.url }}#{{ category }}">{{ category | capitalize }} ({{ site.tags[category].size }})</a></li>
    {% endfor %}
  {% else %}
    {% for category in categories_list %}
      <li><a href="/categories.html#{{category[0]}}-ref">{{ category[0] | capitalize }} ({{ category[1].size }})</a></li>
    {% endfor %}
  {% endif %}
{% assign categories_list = nil %}
</ul>

