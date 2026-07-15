---
layout: page
title: Sahil Badyal
tagline: ML Researcher & Data Science Manager — GenAI, NLP, and Robotics
---
{% include JB/setup %}

<style type="text/css">
  .hero {
    padding: 20px 0 30px;
    border-bottom: 1px solid #eee;
    margin-bottom: 28px;
  }
  .hero .subtitle {
    font-size: 1.1em;
    color: #666;
    margin: 0 0 20px;
  }
  .btn {
    background-color: #BADA55;
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    margin: 4px 4px 4px 0;
    border-radius: 3px;
  }
  .btn:hover {
    background-color: #a8c440;
    color: white;
    text-decoration: none;
  }
  .img-responsive {
    width: 30%;
    float: left;
    padding: 15px;
  }
  .bio {
    margin-bottom: 32px;
    line-height: 1.75;
    text-align: justify;
  }
  .bio p {
    margin-bottom: 14px;
  }
  .expertise {
    font-size: 0.92em;
    color: #555;
    background: #f7f7f7;
    border-left: 3px solid #BADA55;
    padding: 10px 14px;
    margin-top: 18px;
  }
  .posts-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .posts-list li {
    padding: 14px 0;
    border-bottom: 1px solid #f0f0f0;
  }
  .posts-list li:first-child {
    border-top: 1px solid #f0f0f0;
  }
  .posts-list .post-title a {
    font-size: 1.05em;
    font-weight: bold;
    text-decoration: none;
  }
  .posts-list .post-title a:hover {
    text-decoration: underline;
  }
  .post-meta {
    font-size: 0.82em;
    color: #999;
    margin-top: 4px;
  }
  .view-all {
    display: inline-block;
    margin-top: 16px;
    font-size: 0.9em;
  }
</style>

<div class="hero">
  <p class="subtitle">ML Researcher &amp; Data Science Manager &mdash; Generative AI, NLP &amp; Robotics</p>
  <a href="https://s3-ap-southeast-1.amazonaws.com/sahilbprojects/my-blog/Sahil_Badyal_resume.pdf" class="btn" target="_blank">CV</a>
  <a href="https://github.com/sahilbadyal" class="btn" target="_blank">GitHub</a>
  <a href="https://www.linkedin.com/in/sahilbadyal" class="btn" target="_blank">LinkedIn</a>
  <a href="https://scholar.google.co.in/citations?hl=en&user=T65KqaMAAAAJ" class="btn" target="_blank">Publications</a>
</div>

[![src:https://imgs.xkcd.com/comics/progeny.png](assets/images/progeny.png){:class="img-responsive"}](https://xkcd.com/894/){: target="_blank"}

<div class="bio">
  <p>I am a Machine Learning Researcher and Data Science Manager with 7+ years of experience designing and deploying novel methods in Generative AI, NLP, and Robotics. Currently, at <a href="https://capitalone.com" target="_blank">Capital One</a>, I lead teams building next-generation LLM systems, prompt optimization workflows, and high-valuation risk model integrations.</p>

  <p>My technical journey blends deep theoretical research with web-scale production engineering. I have successfully built and optimized conversational agents, fraud-detection transformer models, and deep-learning recommendation systems that scale to millions of users.</p>

  <p>As a published author in EACL, COLING, and IEEE, I love tackling complex problems in computational linguistics and multi-agent reinforcement learning. I hold an MS in Computer Science from Arizona State University.</p>

  <div class="expertise"><strong>Core Expertise:</strong> Generative AI, LLM Agents, NLP, Multi-Agent Reinforcement Learning (MARL), PyTorch, JAX, Distributed Systems, and MLOps.</div>
</div>

### Recent Posts

<ul class="posts-list">
  {% for post in site.posts limit:5 %}
  <li>
    <div class="post-title"><a href="{{ post.url }}">{{ post.title }}</a></div>
    <div class="post-meta">
      {{ post.date | date: "%B %d, %Y" }}
      &middot; {{ post.content | number_of_words | divided_by: 200 | plus: 1 }} min read
      {% if post.categories.size > 0 %}&middot; {{ post.categories | join: ", " }}{% endif %}
    </div>
  </li>
  {% endfor %}
</ul>

<a class="view-all" href="/archive.html">View all posts &rarr;</a>
