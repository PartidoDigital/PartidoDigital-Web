---
layout: pagina
title: Kit de Prensa
---
<section>
    <h2>Recursos gráficos</h2>
    <p>El color naranja utilizado en el Partido Digital es un tono naranja <span style="color: #f36f21;">&#9724;</span> definido por el código hexadecimal F36F21 o RGB (243, 111, 33).</p>
    <p>A continuación se encuentras los logos disponibles para uso libre, formato PNG (con transparencia) y en tres colores (naranja, blanco y negro). Para guardar haga botón derecho y "Guardar imágen".</p>
    <h3>Logo vertical (982 × 794 px)</h3>
    <div class="row mb-3">
        <div class="col-md-4">
            <div class="card">
                <div class="card-block">
                    <img src="https://recursos.partidodigital.org.uy/assets/img/logo_vertical_naranja.png" alt="" class="img-fluid">
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
    <h3>Logo horizontal (986 × 171 px)</h3>
    <div class="row mb-3">
        <div class="col-md-4">
            <div class="card">
                <div class="card-block">
                    <img src="https://recursos.partidodigital.org.uy/assets/img/logo_horizontal_naranja.png" alt="" class="img-fluid">
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
    <h3>Logo solo texto (982 × 138 px)</h3>
    <div class="row mb-3">
        <div class="col-md-4">
            <div class="card">
                <div class="card-block">
                    <img src="https://recursos.partidodigital.org.uy/assets/img/logo_texto_naranja.png" alt="" class="img-fluid">
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card">
                <div class="card-block">
                    <img src="https://recursos.partidodigital.org.uy/assets/img/logo_texto_negro.png" alt="" class="img-fluid">
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card card-inverse">
                <div class="card-block">
                    <img src="https://recursos.partidodigital.org.uy/assets/img/logo_texto_blanco.png" alt="" class="img-fluid">
                </div>
            </div>
        </div>
    </div>
    <h3>Logo sin texto (500 × 510 px)</h3>
    <div class="row mb-3">
        <div class="col-md-2">
            <div class="card">
                <div class="card-block">
                    <img src="https://recursos.partidodigital.org.uy/assets/img/logo_at_naranja.png" alt="" class="img-fluid">
                </div>
            </div>
        </div>
        <div class="col-md-2">
            <div class="card">
                <div class="card-block">
                    <img src="https://recursos.partidodigital.org.uy/assets/img/logo_at_negro.png" alt="" class="img-fluid">
                </div>
            </div>
        </div>
        <div class="col-md-2">
            <div class="card card-inverse">
                <div class="card-block">
                    <img src="https://recursos.partidodigital.org.uy/assets/img/logo_at_blanco.png" alt="" class="img-fluid">
                </div>
            </div>
        </div>
    </div>
</section>
<section>
    <h2 class="mb-2" id="menciones-en-prensa">Menciones en Prensa</h2>
    <ul class="list-group">
    {% for articulo in site.data.prensa reversed %}
        <li class="list-group-item justify-content-between">
            <a target="_blank" href="{{ articulo.link }}">{{ articulo.nombre }}</a><small> por {{ articulo.medio }}</small>
            <span class="badge badge-default badge-pill">{{ articulo.fecha }}</span>
        </li>
    {% endfor %}     
    </ul>
</section>
