---
layout: pagina
title: ¡Muchas gracias por tu apoyo!
og_description: "Ya doné para que el Partido Digital pueda llegar a los usd30.000 que necesita para la campaña, ¡apoyalos vos también!"
og_title: "Yo hice la diferencia para ser protagonista de un mejor Uruguay"
---

{% assign textoCompartir = "Ya doné para que el Partido Digital pueda llegar a los usd30.000 que necesita para la campaña, ¡apoyalos vos también!" %}

Tu pago está en proceso, te solicitamos completarlo para que podamos recibir tu apoyo.

¿Nos ayudás consiguiendo otras personas que lo hagan?

Compartí en tus redes sociales que recién donaste a invitando a tus amigos a hacerlo:

<a class="btn plain bg-twitter text-white mb-1" href="https://twitter.com/intent/tweet?text={{ textoCompartir | url_encode }}&hashtags=PartidoDigital%2CEntreTodos%2CVot%C3%A1PorVos&url={{ 'https://partidodigital.org.uy/quieroapoyar' | url_encode }}&via=PDigitalUY"><i class="fa fa-twitter text-white pr-2" aria-hidden="true"></i> Compartir en Twitter</a><br>
<a class="btn plain bg-facebook text-white" href="https://www.facebook.com/sharer/sharer.php?u={{ 'https://partidodigital.org.uy/apoyoexitoso?compartido' | url_encode }}"><i class="fa fa-facebook text-white pr-2" aria-hidden="true"></i> Compartir en Facebook</a><br>
<p>O mandale a tus amigos por WhatsApp:</p>
<a class="btn plain bg-whatsapp text-white" href="https://wa.me/?text={{ textoCompartir | url_encode }}%20{{ 'https://partidodigital.org.uy/quieroapoyar' | url_encode }}"><i class="fa fa-whatsapp text-white pr-2" aria-hidden="true"></i> Compartir en WhatsApp</a>

<script>
    if(document.location.search.indexOf("compartido") > 0) {
        window.location = "/quieroapoyar";
    }
</script>