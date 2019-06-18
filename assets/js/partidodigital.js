/* global $ */
var meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Septiembre"
];

function collapseNavbar() {
  if (window.pd.layout.indexOf("default") >= 0) {
    if ($(window).scrollTop() > 50) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
      $(".navbar-brand").removeClass("hidden-md-up");
      $("nav .overlay").css("display", "block");
      /*$("#popup").slideDown("slow");
      var scrollHeight = $(document).height();
      var scrollPosition = $(window).height() + $(window).scrollTop();
      if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
        $("#popup").slideUp("slow");
      }*/
    } else {
      $("nav .overlay").css("display", "none");
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
      $(".navbar-brand").addClass("hidden-md-up");
      //$("#popup").slideUp("slow");
    }
  }
}

function hashChange() {
  if (window.location.hash) {
    $("body .resaltar").removeClass("resaltar");
    $(window.location.hash).addClass("resaltar");
    $(window.location.hash)
      .nextUntil($(window.location.hash)[0].nodeName + ", .pagina-footer")
      .addClass("resaltar");
    scrollBy(0, -100);
  }
}

function primerLunes(month, year) {
  var d = new Date(year, month, 1, 0, 0, 0, 0);
  var day = 0;

  // check if first of the month is a Sunday, if so set date to the second
  if (d.getDay() == 0) {
    day = 2;
    d = d.setDate(day);
    d = new Date(d);
  }
  // check if first of the month is a Monday, if so return the date, otherwise get to the Monday following the first of the month
  else if (d.getDay() != 1) {
    day = 9 - d.getDay();
    d = d.setDate(day);
    d = new Date(d);
  }

  return d;
}

function proximoPrimerLunes() {
  var hoy = new Date();
  var actualPrimerLunes = primerLunes(hoy.getUTCMonth(), hoy.getUTCFullYear());
  if (hoy.getUTCDate() > actualPrimerLunes.getUTCDate()) {
    return primerLunes(hoy.getUTCMonth() + 1, hoy.getUTCFullYear());
  } else {
    return actualPrimerLunes;
  }
}

$(window).on("hashchange", hashChange);
$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
  $("body").scrollspy({ offset: 100 });

  $("a").bind("click", function (event) {
    var $anchor = $(this);
    if (
      $anchor.attr("href").indexOf("#") === 0 &&
      $anchor.data("toggle") !== "collapse" &&
      !$anchor.hasClass("close")
    ) {
      ga("send", "event", "Link", "Click", $anchor.attr("href").slice(1));
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top - 90
          },
          1500,
          "easeInOutExpo"
        );
      $($anchor.attr("href")).addClass("resaltar");
      $($anchor.attr("href"))
        .nextUntil($($anchor.attr("href"))[0].nodeName + ", .pagina-footer")
        .addClass("resaltar");
      event.preventDefault();
    }
  });

  // Detectar qué respuesta se visualiza
  $("#accordion").on("show.bs.collapse", function (e) {
    ga(
      "send",
      "event",
      "Preguntas",
      "VerRespuesta",
      e.target.getAttribute("id")
    );
  });

  var proximaReunionMensual = proximoPrimerLunes();
  $("span.proximaReunion").html(
    proximaReunionMensual.getUTCDate() +
    " de " +
    meses[proximaReunionMensual.getUTCMonth()]
  );

  hashChange();

  $(".registro_form .enviar_info").bind("click", function () {
    var that = $(this).parent('form');
    $.ajax({
      method: "post",
      url: "https://info.partidodigital.org.uy/form/submit?formId=6&ajax=true",
      headers: { 'X-Requested-With': 'XMLHttpRequest' },
      dataType: "json",
      data: $.param({
        "mauticform[nombre]": $("[name=nombre]", that).val(),
        "mauticform[email]": $("[name=email]", that).val(),
        "mauticform[celular]": $("[name=celular]", that).val(),
        "mauticform[submit]": 1,
        "mauticform[formId]": 6,
        "mauticform[formName]": "sumate",
        "mauticform[return]": ""
      }),
      beforeSend: function () {
        if (
          $("[name=nombre]", that).val() === "" ||
          $("[name=email]", that).val() === "" ||
          $("[name=celular]", that).val() === ""
        ) {
          $(".enviar_info", that)
            .attr("disabled", true)
            .addClass("error")
            .val("Algún campo está vacío. Intentalo de nuevo.");
          setTimeout(function () {
            $(".enviar_info", that)
              .attr("disabled", false)
              .removeClass("error")
              .val("Enviar información");
          }, 5000);
          return false;
        }
        $(".enviar_info", that)
          .attr("disabled", true)
          .val("Enviando...");
      },
      success: function () {
        fbq('track', 'CompleteRegistration');
        $(".enviar_info", that)
          .attr("disabled", true)
          .val("Datos enviados. ¡Gracias por sumarte!");
        setTimeout(function () {
          that.trigger("reset");
          $(".enviar_info", that)
            .attr("disabled", false)
            .val("Enviar información");
        }, 5000);
      },
      error: function (jqXHR, textStatus, errorThrown) {
        ga("send", "event", "Error", "Formulario", "Sumarte: " + $("[name=email]", that).val() + " | " + $("[name=nombre]", that).val() + " | " + $("[name=celular]", that).val());
        $(".enviar_info", that)
          .attr("disabled", true)
          .val("Hubo un error al enviar tus datos. Prueba de nuevo.");
        setTimeout(function () {
          that.trigger("reset");
          $(".enviar_info", that)
            .attr("disabled", false)
            .val("Enviar información");
        }, 5000);
      }
    });
  });

  var $videoSrc;
  $(".video-btn").click(function () {
    $videoSrc = $(this).data("src");
  });

  $("#myModal").on("shown.bs.modal", function (e) {
    $("#video").attr(
      "src",
      $videoSrc + "?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1"
    );
  });

  $("#myModal").on("hide.bs.modal", function (e) {
    $("#video").attr("src", $videoSrc);
  });

  $(".navbar-toggleable-md ul li a").click(function () {
    $(".navbar-toggleable-md").collapse("hide");
  });

  var RSSParserOptions = {
    customFields: {
      item: ["dc:creator", "category"]
    }
  };

  /*RSSParser.parseURL('https://debate.partidodigital.org.uy/c/ideas.rss', RSSParserOptions, function(err, parsed) {
        if (err) {
            console.log(err);
            return;
        }
        for (var i = 0; i <= 4; i++) {
            var e = parsed.feed.entries[i];
            var title = '"' + e.title + '"';
            var autor = e["dc:creator"].split(" ");
            $('#slider').append("<p>" + "<img class='rounded-circle autor' title='" + autor[1] + "' src='https://debate.partidodigital.org.uy/user_avatar/debate.partidodigital.org.uy/" + autor[0].substr(1) + "/30/1.png'/><a target='_blank' href='" + e.link + "'>" + title + "</a> en " + e.category + "</p>");
        }
        $('#debate-rss').show();
        $('#slider').slick({
            vertical: true,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 300,
            arrows: false
        });
    });*/

  // Closes the Responsive Menu on Menu Item Click
  $(".navbar-toggleable-md ul li a").click(function () {
    $(".navbar-toggleable-md").collapse("hide");
  });
});
