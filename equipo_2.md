---
layout: pagina
title: Equipo
date: 2018-03-14
---

<section id="equipo" class="container">
    <div class="row">
        <div class="col-lg-12">
            <p>
                Al Partido Digital lo hacemos personas que creemos que es necesaria una actualización en la forma en la que participamos politicamente, que logre empoderar a más personas para que su voz sea escuchada y tenga impacto. Todos y todas quienes aportamos nuestros tiempo y ganas para este emprendimiento político tenemos distintas ideas y orígenes ideológicos, algunos con experiencia político partidaria y otros debutando ahora, pero a todos nos une el respeto por las ideas del otro y las ganas de luchar porque cada idea tenga su lugar en un debate público transparente y moderno.
            </p>
            <p>
                Nosotros somos los que creemos que el Partido Digital es el cambio que necesita Uruguay y estamos trabajando para lograrlo:
            </p>
        </div>
    </div>
    <div class="container">
        {% for persona in site.data.equipo %}
            {% assign mod = forloop.index | modulo: 2 %}
            <section class="row separador">
                <div class="row mt-3 text-center">
                    <div class="col-lg-3 float-md-left">
                        <h4 class="pb-0">{{ persona.nombre }}</h4>
                        <ul class="list-inline m-0 p-0">
                            {% for network in persona.networks %}
                                {% for info in network %}
                                    <li class="list-inline-item"><a href="{{ info[1] }}" target="_blank"><i class="fa fa-{{ info[0] }}" aria-hidden="true"></i></a></li>
                                {% endfor %}
                            {% endfor %}
                        </ul>
                        <h5>{{ persona.posicion | newline_to_br }}</h5>
                    </div>
                    <div class="col-lg-3 float-md-left">
                        <img class="rounded-circle img-responsive img-center mb-1" src="/assets/img/equipo/{{ persona.img }}?" alt="">  
                    </div>
                    <div class="col-lg-6">
                        <ul class="list-group">
                            {% for exp in persona.experiencia %}
                                <li class="list-group-item">
                                    {{exp | markdownify | remove: '<p>' | remove: '</p>'}}
                                </li>
                            {% endfor %}
                        </ul>
                    </div>
                </div>
            </section>       
        {% endfor %}
        <div class="row mt-3 text-center">
            <div class="col-lg-3 float-md-left">
                <h4 class="pb-0">Tu nombre</h4>
                <h5>Donde quieras aportar</h5>
            </div>
            <div class="col-lg-3 float-md-left">
                <span class="btn-circle p-x-3 p-y-2 mb-1" style="width: 12rem;height: 12rem;font-size: 7.5rem; background-color: transparent;">
                <i class="fa fa-user" aria-hidden="true"></i>
            </span>  
            </div>
            <div class="col-lg-6">
                <ul class="list-group">
                    <li class="list-group-item">Vos también podés ser parte del cambio.</li>
                    <li class="list-group-item">Acercate y ayudanos en donde vos te sientas útil.</li>
                    <li class="list-group-item"><a href="/donar">Dona aquí</a> o <a href="/voluntariado">llena el formulario</a> para ser voluntario.</li>
                </ul>
            </div>
        </div>
    </div>
</section>
