/* global $ */

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

$(window).on("hashchange", hashChange);
$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a').bind('click', function(event) {
        var $anchor = $(this);
        if($anchor.attr('href').indexOf('#') === 0) {
            ga('send', 'event', 'Menu', 'Click', $anchor.attr('href').slice(1));
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        }
    });
    
    // Detectar qué respuesta se visualiza
    $('#accordion').on('show.bs.collapse', function (e) {
        ga('send', 'event', 'Preguntas', 'VerRespuesta', e.target.getAttribute('id'));
    });

    hashChange();

    $("body").scrollspy({offset:200});

    var $contactForm = $('#contactoform');
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
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-toggleable-md ul li a').click(function() {
    $(".navbar-toggleable-md").collapse('hide');
});
