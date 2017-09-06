/* global $ */
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Septiembre"];

function collapseNavbar() {
    if(window.pd.layout === "default") {
        if ($(".navbar-fixed-top").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
            $(".navbar-brand").removeClass("hidden-md-up");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
            $(".navbar-brand").addClass("hidden-md-up");
        }
    }
}

function hashChange() {
    if(window.location.hash) {
        $('body .resaltar').removeClass('resaltar');
        $(window.location.hash).addClass('resaltar');
        scrollBy(0, -100)
    }
}

function primerLunes(month, year){
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
    day = 9-(d.getDay());
    d = d.setDate(day);
    d = new Date(d);
  }

  return d;
}

function proximoPrimerLunes() {
  var hoy = new Date();
  var actualPrimerLunes = primerLunes(hoy.getUTCMonth(), hoy.getUTCFullYear());
  if(hoy.getUTCDate() > actualPrimerLunes.getUTCDate()) {
    return primerLunes(hoy.getUTCMonth() + 1, hoy.getUTCFullYear());
  } else {
    return actualPrimerLunes;
  }
}

$(window).on("hashchange", hashChange);
$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    // GA tracker name
    var trackerSend = ga.getAll()[0].get('name') + '.send';
    
    $('a').bind('click', function(event) {
        var $anchor = $(this);
        if($anchor.attr('href').indexOf('#') === 0) {
            ga(trackerSend, 'event', 'Menu', 'Click', $anchor.attr('href').slice(1));
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        }
    });
    
    // Detectar qué respuesta se visualiza
    $('#accordion').on('show.bs.collapse', function (e) {
        ga(trackerSend, 'event', 'Preguntas', 'VerRespuesta', e.target.getAttribute('id'));
    });

    var proximaReunionMensual = proximoPrimerLunes();
    $('span.proximaReunion').html(proximaReunionMensual.getUTCDate() + " de " + meses[proximaReunionMensual.getUTCMonth()]);

    hashChange();

    $("body").scrollspy({offset:200});
    $('#registro_web').ajaxChimp({
        language: 'es',
        url: "//partidodigital.us14.list-manage.com/subscribe/post?u=8e16f7903de2c0600985cf9e2&amp;id=3e02e25008",
        ajaxOptions: {
            beforeSend: function() {
                $('#submit').attr('disabled', true).val('Enviando...');
            }
        },
        callback: function(resp) {
            if (resp.result === 'success') {
                $('#submit').val(resp.msg);
                setTimeout(function() {
                    $('#submit').val("Gracias por sumarte, es un placer tenerte");
                }, 5000);
            } else {
                if(resp.msg.indexOf("ya está suscrito")) {
                    $('#submit').attr('disabled', false).val("Ya te habias sumado, gracias por insistir :)");
                } else {
                    $('#submit').attr('disabled', false).val(resp.msg);
                    setTimeout(function() {
                        $('#submit').val("Intentalo de nuevo");
                    }, 5000);
                }
            }
        }
    });

    /*var $contactForm = $('#contactoform');
    $contactForm.submit(function(e) {
        e.preventDefault();
        var $submit = $('input:submit', $contactForm);
        var defaultSubmitText = $submit.val();

        $.ajax({
            url: '//formspree.io/' + window.pd.email_contacto,
            method: 'POST',
            data: $(this).serialize(),
            dataType: 'json',
            beforeSend: function() {
                $submit.attr('disabled', true).val('Enviando...');
            },
            success: function(data) {
                $submit.val('¡Enviado!');
                setTimeout(function() {
                    $submit.attr('disabled', false).val(defaultSubmitText);
                }, 5000);
            },
            error: function(err) {
                $submit.val('Hubo un error, vuelve a intentar luego.');
                setTimeout(function() {
                    $submit.attr('disabled', false).val(defaultSubmitText);
                }, 5000);
            }
        });
    });*/
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-toggleable-md ul li a').click(function() {
    $(".navbar-toggleable-md").collapse('hide');
});
