---
layout: pagina
title:  Blog
---

<ul class="list-unstyled">
  {% for post in site.posts %}
    {% assign months = "Enero|Febrero|Marzo|Abril|Mayo|Junio|Julio|Agosto|Septiembre|Octubre|Noviembre|Diciembre" | split: "|" %}
    {% assign m = post.date | date: "%-m" | minus: 1 %}
    {% assign day = post.date | date: "%-d" %}
    {% assign month = months[m] %}
    {% assign year = post.date | date: "%Y" %}
    <li class="list-group-item" style="border-color: #f87200; border-radius: 0;">
      <a href="{{ post.url }}">{{ post.title }}</a><span class="badge badge-default">{{ day }} {{ month }} {{ year }}</span><p class="m-0 p-0">{{ post.excerpt | strip_html }}</p>
    </li>
  {% endfor %}
</ul>