---
layout: page
title: Welcome To My Blog
tagline: know me more :)
---
{% include JB/setup %}

Hello All!

I am Sahil Badyal, a software developer at [Drishti Soft. Solutions Pvt. Ltd.](https://www.ameyo.com) in Gurgaon. My home town is [Billawar](http://en.wikipedia.org/wiki/Billawar) in [Jammu and Kashmir](http://en.wikipedia.org/wiki/Jammu_and_Kashmir), where I have spent much of my childhood.
 
This blog is my virtual window to the world. Hope you enjoy reading it as much as I enjoy writing it. Happy Reading :)


###My Posts

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

