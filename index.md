---
layout: page
title: Welcome To My Blog
tagline: know me more :)
---
{% include JB/setup %}

Hello peeps!

I am Sahil Badyal, a Computer Science undergraduate from [National Institute of Technology Hamirpur](http://www.nith.ac.in) in DevBhumi Himachal Pradesh.My home town is [Billawar](http://en.wikipedia.org/wiki/Billawar) in [Jammu and Kashmir](http://en.wikipedia.org/wiki/Jammu_and_Kashmir), where I have spent much of my childhood.
 
This blog is my virtual window to the world. Hope you enjoy reading it as much as I enjoy writing it. Happy Reading :)


###My Posts

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

