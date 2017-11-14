$(function () {
    $('#mc-embedded-subscribe-form').ajaxChimp({
        language: 'es',
        url: "//partidodigital.us14.list-manage.com/subscribe/post?u=8e16f7903de2c0600985cf9e2&amp;id=d69798f48c",
        ajaxOptions: {
            beforeSend: function () {
                $('#submit').attr('disabled', true).val('Enviando...');
            }
        },
        callback: function (resp) {
            if (resp.result === 'success') {
                $('#submit').val("Gracias por afiliarte. Vas a ser redirigido a una página donde debes seguir unos pasos para concretar la afiliación.");
                setTimeout(function () {
                    var op = $('input[name="group[4669]"]:checked', '#mc-embedded-subscribe-form').val();
                    switch(parseInt(op)) {
                        case 1: window.location.href = '/afiliacion/tarjeta-de-credito'; break;
                        case 8: window.location.href = '/afiliacion/paypal'; break;
                        case 2: window.location.href = '/afiliacion/brou'; break;
                        case 16: window.location.href = '/afiliacion/santander'; break;
                        case 32: window.location.href = '/afiliacion/banred'; break;
                        case 64: window.location.href = '/afiliacion/bbva'; break;
                        case 4: window.location.href = '/afiliacion/abitab-red-pagos'; break;
                        case 256: window.location.href = '/afiliacion/creditel'; break;
                        case 128: window.location.href = '/afiliacion/itau'; break;
                    }
                }, 2000);
            } else {
                if (resp.msg.indexOf("ya está suscrito")) {
                    $('#submit').attr('disabled', false).val("Ya te habias afiliado, gracias por insistir :)");
                } else {
                    $('#submit').attr('disabled', false).val(resp.msg);
                    setTimeout(function () {
                        $('#submit').val("Intentalo de nuevo");
                    }, 5000);
                }
            }
        }
    });
});