---
layout: pagina
---

<div style="text-align: center;">
    <h2 style="margin-top: 20pt;" id="titulo"></h2>

    <div class="recuadro mensaje">
        <strong id="mensaje"></strong>
    </div>

    <p>Por favor ponte en <a href="mailto:contacto@partidodigital.org.uy">contacto</a> con nosotros si tienes alguna consulta.</p>
</div>

<script>
    var mensajes = {
    {% for mensaje in site.data.mensajes %} 
        "{{mensaje.codigo}}": {
            "texto": "{{mensaje.texto}}",
            "titulo": "{{mensaje.titulo}}"
        }{% unless forloop.last %},{% endunless %}
    {% endfor %}
    }
    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    var codigo = getParameterByName("codigo");
    document.getElementById("mensaje").innerHTML = mensajes[codigo] ? mensajes[codigo].texto : "Esto no debió pasar :O";
    document.getElementById("titulo").innerHTML = mensajes[codigo] ? mensajes[codigo].titulo : "Algo salió mal..."
</script>