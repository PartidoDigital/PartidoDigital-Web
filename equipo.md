---
layout: pagina
title: Equipo
---

<section>
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
    <div class="row">
        {% for persona in site.data.equipo %}
        <div class="col-md-6 mt-5">
            <div class="card card-profile">
                <div class="card-avatar">
                    <a href="#"> 
                        <img class="img" src="/assets/img/equipo/{{ persona.img }}"> 
                    </a>
                </div>
                <div class="table">
                    <h4 class="card-caption">{{ persona.nombre }}</h4>
                    <h6 class="category text-muted pt-0">{{ persona.posicion | newline_to_br }}</h6>
                    <div class="mt-0"> 
                        <ul class="list-inline m-0 p-0">
                            {% for network in persona.networks %}
                                {% for info in network %}
                                    <li class="list-inline-item">
                                        <a href="{{ info[1] }}" target="_blank"><i class="fa fa-{{ info[0] }} gradiente-naranja texto-gradiente" aria-hidden="true"></i></a>
                                    </li>
                                {% endfor %}
                            {% endfor %}
                        </ul>
                    </div>
                    {% if persona.experiencia.size > 0 %}
                    <ul class="list-unstyled m-0 p-0 mt-3">
                        {% for exp in persona.experiencia %}
                            <li>
                                {{exp | markdownify | remove: '<p>' | remove: '</p>'}}
                            </li>
                        {% endfor %}
                    </ul>
                    {% endif %}
                </div>
            </div>
        </div>
        {% endfor %}
        <div class="col-md-6 mt-5">
            <div class="card card-profile">
                <div class="card-avatar">
                    <a href="#"> 
                        <img class="img" width="200" src="/assets/img/equipo/vos.png"> 
                    </a>
                </div>
                <div class="table">
                    <h4 class="card-caption">¡Vos!</h4>
                    <h6 class="category text-muted pt-0">Ayudanos a ayudarte</h6>
                    <p>
                        <a href="/#contacto">Contactate</a> con nosotros o <a href="/voluntariado">postulate como voluntario y ayudanos a conseguir nuestros objetivos de empoderar a la ciudadanía.</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>