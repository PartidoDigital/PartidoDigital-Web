---
layout: pagina
title: Preguntas frecuentes
---

<section id="preguntas">
    <div class="row">
        <div class="col-lg-12">
            <img src="assets/img/preguntas.png" width="400" alt="" align="right" class="img-fluid" />
                {% for pregunta in site.data.preguntas %}
                    <div class="panel panel-default {% if forloop.last == false %} mb-3 {% endif %}">
                        <div class="panel-heading" role="tab" id="pregunta-{{ pregunta.identificador }}">
                            <h3 data-toggle="collapse" href="" data-target="#respuesta-{{ pregunta.identificador }}" aria-expanded="true" aria-controls="{{ pregunta.identificador }}">
                                {{ pregunta.pregunta }}
                            </h3>
                        </div>
                        <div id="respuesta-{{ pregunta.identificador }}" class="{% if forloop.last == false %} mb-3 {% endif %}" role="tabpanel" aria-labelledby="pregunta-{{ pregunta-identificador }}">
                            {{ pregunta.respuesta }}
                            {% if pregunta.link != nil %}
                            <br/><br/>
                            <a href="{{ pregunta.link }}" style="font-size: 15px;" class="btn">Más información</a>
                            {% endif %}
                        </div>
                    </div>
                {% endfor %}
        </div>
    </div>
</section>