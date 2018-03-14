---
layout: pagina
title: Equipo
date: 2018-03-14
---

<section id="equipo" class="container">
    <div class="row">
        <div class="col-lg-12">
            <p>
                El Partido Digital surgió de un grupo de personas jóvenes de distintos ámbitos y de distintas profesiones con ganas de creer más en la política de nuestro país para que éste salga adelante. Estamos convencidos que podemos acercarle la política a los uruguayos de una manera más directa para que la misma empiece a sanar aprovechando las tecnologías de la información y comunicación.
            </p>
        </div>
        {% for persona in site.data.equipo %}
            <div class="col-lg-4 col-sm-6 text-center mt-3">
                <img class="rounded-circle img-responsive img-center"
                    src="https://s.gravatar.com/avatar/{{ persona.gravatar }}?s=160" alt="">
                <h4 class="my-1">
                    {{ persona.nombre }}
                    <br/>
                    <small>{{ persona.posicion }}</small>
                    <br/>
                    {% for network in persona.networks %}
                        {% for info in network %}
                            <a href="{{ info[1] }}" target="_blank"><i class="fa fa-{{ info[0] }}" aria-hidden="true"></i></a>
                        {% endfor %}
                    {% endfor %}
                </h4>
            </div>
        {% endfor %}
        <div class="col-lg-4 col-sm-6 text-center mt-3">
            <span class="btn-circle p-x-3 p-y-2" style="width: 9rem;height: 9rem;font-size: 5.5rem; background-color: transparent;">
                <i class="fa fa-user" aria-hidden="true"></i>
            </span>
            <h4 class="my-1">Vos <br/><small>Donde quieras aportar</small></h4>
            <p class="m-0">Vos también podés ser parte del cambio. Acercate y ayudanos en donde vos te sientas útil.</p>
        </div>
    </div>
</section>