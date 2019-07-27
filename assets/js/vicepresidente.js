$(function () {
	$("#postular-vicepresidente").bind("click", function () {
        var params = {
            "mauticform[nombrepostulado]": $("[name=nombrepostulado]").val(),
            "mauticform[razonpostulado]": $("[name=razonpostulado]").val(),
            "mauticform[descripcionpostulado]": $("[name=descripcionpostulado]").val(),
            "mauticform[enlacespostulado]": $("[name=enlacespostulado]").val(),
            "mauticform[contactopostulado]": $("[name=contactopostulado]").val(),
            "mauticform[nombrepostulante]": $("[name=nombrepostulante]").val(),
            "mauticform[apellidopostulante]": $("[name=apellidoostulante]").val(),
			"mauticform[emailpostulante]": $("[name=emailpostulante]").val(),
			"mauticform[celularpostulante]": $("[name=celularpostulante]").val(),
            "mauticform[submit]": 1,
            "mauticform[formId]": 10,
            "mauticform[formName]": "vicepresidente",
            "mauticform[return]": ""
        };
		$.ajax({
			method: "post",
			url: "https://info.partidodigital.org.uy/form/submit?formId=10&ajax=true",
			headers: { 'X-Requested-With': 'XMLHttpRequest' },
			dataType: "json",
			data: $.param(params),
			beforeSend: function () {
				if ($("[name=nombrepostulado]").val() === "" || $("[name=razonpostulado]").val() === "" ||
					$("[name=descripcionpostulado]").val() === "" || $("[name=enlacespostulado]").val() === "" ||
                    $("[name=contactopostulado]").val() === "" || $("[name=nombrepostulante]").val() === "" || $("[name=apellidopostulante]").val() === "" ||
                    $("[name=emailpostulante]").val() === "" || $("[name=celularpostulante]").val() === "") {
					$("#postular-vicepresidente").attr("disabled", true).addClass("error").val("Queda algún campo por llenar. Intentalo de nuevo.");
					setTimeout(function () {
						$("#postular-vicepresidente").attr("disabled", false).removeClass("error").val("POSTULAR VICEPRESIDENTE");
					}, 5000);
					return false;
				}
				$("#postular-vicepresidente").attr("disabled", true).val("Enviando...");
			},
			success: function () {
				ga("send", "event", "Formulario", "Enviado", "Vicepresidente");
				fbq('track', 'CompleteRegistration');
				twq('track','SignedUp');
				window.location.href = "/gracias-vicepresidente";
			},
			error: function (jqXHR, textStatus, errorThrown) {
				Sentry.captureMessage(jqXHR.toString() + " || " + textStatus + " || " + errorThrown.toString() + " || " + $("[name=nombrepostulante]").val() + " / " + $("[name=apellidopostulante]").val() + " / " + $("[name=emailpostulante]").val() + " / " + $("[name=celularpostulante]").val());
				$("#postular-vicepresidente").attr("disabled", true).addClass("error").val("Hubo un error al enviar tus datos. Prueba de nuevo.");
				setTimeout(function () {
					$("#postular-vicepresidente").attr("disabled", false).removeClass("error").val("POSTULAR VICEPRESIDENTE");
				}, 5000);
			}
		});
	});
});
