---
layout: page
title: "About"
description: "About me"
group: navigation
---
{% include JB/setup %}

Here is some information about me.


### My Alma Mater
I am an alumnus of  [Arizona State University](https://cidse.engineering.asu.edu/){: target="_blank"} (class of 2021) and [National Institute of Technology Hamirpur](https://nith.ac.in){: target="_blank"}, (class of 2016). I went to [JK Public School Kunjwani](https://jkpublicschool.in){: target="_blank"} and Sacred Heart Convent School.

### My Current Academic Interests

- Reinforcement Learning
- Natural Language Processing
- Robotics and Robot Learning

### My Hobbies

#### Outdoors

- [Hiking](https://www.alltrails.com/members/sahil-badyal){: target="_blank"}
- Traveling
- Dancing

#### Indoors

<ul>
  <li>Music (I can sing, play guitar and occasionally a uke).</li>
  <li>Chess (Current <a href="https://www.chess.com/member/sahilbadyal" target="_blank">Chess.com </a> <div class="rating_card" style="display: inline-flex;">  
<div id="chess_rating" style="margin-left: 4px;">  Rating:  </div>  
<div id="chess_w" style="margin-left: 4px;">  W: </div> 
<div id="chess_l" style="margin-left: 4px;">  L:  </div>
<div id="chess_d" style="margin-left: 4px;">  D: </div> 
</div> )</li>
</ul> 


<script>
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
res = httpGet('https://api.chess.com/pub/player/sahilbadyal/stats')
res = JSON.parse(res)
ratingTag = document.getElementById('chess_rating');
wTag = document.getElementById('chess_w');
lTag = document.getElementById('chess_l');
dTag = document.getElementById('chess_d');
console.log(res['chess_rapid']['last']['rating'])
ratingTag.append(res['chess_rapid']['last']['rating']+', ')
wTag.append(res['chess_rapid']['record']['win']+', ')
lTag.append(res['chess_rapid']['record']['loss']+',')
dTag.append(res['chess_rapid']['record']['draw'])
</script>

My contact is always visible on the footer.
