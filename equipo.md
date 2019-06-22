---
layout: pagina
title: Equipo
date: 2018-03-14
---

<section>
    <div>
        <div class="row">
            <div class="col">
            <p>
                Al Partido Digital lo hacemos personas que creemos que es necesaria una actualización en la forma en la que participamos politicamente, que logre empoderar a más personas para que su voz sea escuchada y tenga impacto. Todos y todas quienes aportamos nuestros tiempo y ganas para este emprendimiento político tenemos distintas ideas y orígenes ideológicos, algunos con experiencia político partidaria y otros debutando ahora, pero a todos nos une el respeto por las ideas del otro y las ganas de luchar porque cada idea tenga su lugar en un debate público transparente y moderno.
            </p>
            <p>
                Nosotros somos los que creemos que el Partido Digital es el cambio que necesita Uruguay y estamos trabajando para lograrlo.
            </p>
            </div>
        </div>
        <div class="card-columns mt-4">
            {% for persona in site.data.equipo %}
            <div class="card mt-5">
                <div class="px-3 mt-neg-4">
                    <img src="/assets/img/equipo/{{ persona.img }}" class="card-img" alt="">
                </div>
                <div class="card-body p-0">
                    <h6 class="card-title mb-0 text-uppercase p-4">
                        {{ persona.nombre }}
                    </h6>
                    <ul>
                        {% for network in persona.networks %}
                            {% for info in network %}
                                <li class="list-inline-item">
                                    <a href="{{ info[1] }}" target="_blank">
                                        <i class="fa fa-{{ info[0] }}" aria-hidden="true"></i>
                                    </a>
                                </li>
                            {% endfor %}
                        {% endfor %}
                    </ul>
                    <p class="card-text fs--1 text-primary fw-bold pt-4 pl-4 pr-4">
                        {{ persona.posicion | newline_to_br }}
                    </p>
                    <ul class="lista-experiencia">
                        {% for exp in persona.experiencia %}
                            <li class="lista-experiencia-item">
                                {{exp | markdownify | remove: '<p>' | remove: '</p>'}}
                            </li>
                        {% endfor %}
                    </ul>
                </div>
            </div>
            {% endfor %}
        </div>
    </div>
</section>