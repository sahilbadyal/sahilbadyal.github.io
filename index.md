---
layout: page
title: Welcome To My Blog
tagline: know me more :)
---
{% include JB/setup %}

Hello peeps!

I am Sahil Badyal, a Computer Science undergraduate from [National Institute of Technology Hamirpur](http://www.nith.ac.in) in DevBhumi Himachal Pradesh.My home town is [Billawar](http://en.wikipedia.org/wiki/Billawar) in [Jammu and Kashmir](http://en.wikipedia.org/wiki/Jammu_and_Kashmir), where I have spent much of my childhood.

###My Alma Mater

I am a proud alumnus of [JK Public School Kunjwani](http://jkpublicschool.in) and [Sacred Heart Convent School](https://www.facebook.com/SHCSBILLAWAR).

###My General Interests

I am interested in reading about aliens, cosmos, physics, technology, and lots of other stuffs which I cannot recall right now.

###My Academic Interests

My academic interests include :

1. Machine Learning
2. Computer Architecture
3. Algorithms and their design
4. Server-Side development and
5. Cloud Computing

###My Hobbies

Apart from sleeping for long hours I like to sing, dance, play guitar, code.Yup! pretty much anything that keeps me busy.

###My Posts

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

