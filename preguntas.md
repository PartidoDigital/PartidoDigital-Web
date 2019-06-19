---
layout: pagina
---

<section id="preguntas" class="container content-section text-xs-center separador">
    <div class="row">
        <div class="col-lg-8 offset-lg-2">
            <img src="assets/img/preguntas_icon.png" alt="" class="img-fluid" />
            <h2>Preguntas</h2>
            <div id="accordion" role="tablist" aria-multiselectable="true">
                {% for pregunta in site.data.preguntas %}

                    <div class="panel panel-default {% if forloop.last == false %} mb-3 {% endif %}">
                        <div class="panel-heading" role="tab" id="pregunta-{{ pregunta.identificador }}">
                            <h4 class="panel-title mt-3">
                                <a data-toggle="collapse" data-parent="#accordion" href="" data-target="#respuesta-{{ pregunta.identificador }}" aria-expanded="true" aria-controls="{{ pregunta.identificador }}" style="text-transform: none;
                                color: grey;">
                                    <u>{{ pregunta.pregunta }}</u>
                                </a>
                            </h4>
                        </div>
                        <div id="respuesta-{{ pregunta.identificador }}" class="panel-collapse collapse {% if forloop.last == false %} mb-3 {% endif %}" role="tabpanel" aria-labelledby="pregunta-{{ pregunta-identificador }}">
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
    </div>
</section>