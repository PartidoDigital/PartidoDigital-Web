---
layout: pagina
title: Kit de Prensa
date: 2018-05-20
---

<div class="container">
    <section>
        <h2>Recursos gráficos</h2>
        <p>El color naranja utilizado en el Partido Digital es un tono naranja <span style="color: #f36f21;">&#9724;</span> definido por el código hexadecimal F36F21 o RGB (243, 111, 33).</p>
        <p>A continuación se encuentras los logos disponibles para uso libre, formato PNG (con transparencia) y en tres colores (naranja, blanco y negro). Para guardar haga botón derecho y "Guardar imágen".</p>
        <div class="row container">
            <h3>Logo original (1500 × 442 px)</h3>
            <div class="col-md-4">
                <div class="card">
                    <div class="card-block">
                        <img src="https://recursos.partidodigital.org.uy/assets/img/logo_original.png" alt="" class="img-fluid">
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <div class="card-block">
                        <img src="https://recursos.partidodigital.org.uy/assets/img/logo_original_negro.png" alt="" class="img-fluid">
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card card-inverse">
                    <div class="card-block">
                        <img src="https://recursos.partidodigital.org.uy/assets/img/logo_original_blanco.png" alt="" class="img-fluid">
                    </div>
                </div>
            </div>
        </div>
        <div class="row container">
            <h3>Logo vertical (1500 × 530 px)</h3>
            <div class="col-md-4">
                <div class="card">
                    <div class="card-block">
                        <img src="https://recursos.partidodigital.org.uy/assets/img/logo_vertical.png" alt="" class="img-fluid">
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <div class="card-block">
                        <img src="https://recursos.partidodigital.org.uy/assets/img/logo_vertical_negro.png" alt="" class="img-fluid">
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card card-inverse">
                    <div class="card-block">
                        <img src="https://recursos.partidodigital.org.uy/assets/img/logo_vertical_blanco.png" alt="" class="img-fluid">
                    </div>
                </div>
            </div>
        </div>
        <div class="row container">
            <h3>Logo horizontal (1500 × 123 px)</h3>
            <div class="col-md-4">
                <div class="card">
                    <div class="card-block">
                        <img src="https://recursos.partidodigital.org.uy/assets/img/logo_horizontal.png" alt="" class="img-fluid">
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <div class="card-block">
                        <img src="https://recursos.partidodigital.org.uy/assets/img/logo_horizontal_negro.png" alt="" class="img-fluid">
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card card-inverse">
                    <div class="card-block">
                        <img src="https://recursos.partidodigital.org.uy/assets/img/logo_horizontal_blanco.png" alt="" class="img-fluid">
                    </div>
                </div>
            </div>
        </div>
        <div class="row container">
            <h3>Logo celular (885 × 1500 px)</h3>
            <div class="col-md-2">
                <div class="card">
                    <div class="card-block">
                        <img src="https://recursos.partidodigital.org.uy/assets/img/logo_cel.png" alt="" class="img-fluid">
                    </div>
                </div>
            </div>
            <div class="col-md-2">
                <div class="card">
                    <div class="card-block">
                        <img src="https://recursos.partidodigital.org.uy/assets/img/logo_cel_negro.png" alt="" class="img-fluid">
                    </div>
                </div>
            </div>
            <div class="col-md-2">
                <div class="card card-inverse">
                    <div class="card-block">
                        <img src="https://recursos.partidodigital.org.uy/assets/img/logo_cel_blanco.png" alt="" class="img-fluid">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <h2 class="mb-2">Menciones en Prensa</h2>
        <div class="card-columns">
        {% for articulo in site.data.prensa %}
            <div class="card">
                <div class="card-block">
                    <h6 class="card-subtitle text-muted">{{ articulo.nombre }}</h6>
                    <p class="card-text">{{ articulo.fecha }}</p>
                    <a target="_blank" href="{{ articulo.link }}" class="card-link">{{ articulo.medio }}</a>
                </div>
            </div>
        {% endfor %}     
        </div>
    </section>
</div>
