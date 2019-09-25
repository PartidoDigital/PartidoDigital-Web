$(function() {
    $("#cta_form_enviar").bind("click", function () {
		$.ajax({
			method: "post",
			url: "https://info.partidodigital.org.uy/form/submit?formId=13&ajax=true",
			headers: { 'X-Requested-With': 'XMLHttpRequest' },
			dataType: "json",
			data: $.param({
                "mauticform[email]": $("[name=email]").val(),
                "mauticform[submit]": 1,
                "mauticform[formId]": 13,
                "mauticform[formName]": "sumateintro",
                "mauticform[return]": ""
			}),
			beforeSend: function () {
				if ($("[name=email]").val() === "") {
					$("#cta_form_enviar").attr("disabled", true).addClass("error").html("El mail es requerido");
					setTimeout(function () {
						$("#cta_form_enviar").attr("disabled", false).removeClass("error").html("SUMATE");
					}, 5000);
					return false;
				}
				$("#cta_form_enviar").attr("disabled", true).html("Enviando...");
			},
			success: function (result) {
                if(result.success === 1) {
                    ga("send", "event", "Formulario", "Enviado", "SUMATE");
                    $("[name=email]").val("");
				    $("#cta_form_enviar").attr("disabled", true).html("¡Listo!");
                    setTimeout(function () {
                        $("#cta_form_enviar").attr("disabled", false).html("SUMATE");
                    }, 5000);
                } else {
                    ga("send", "event", "Formulario", "Error", "SUMATE: " + $("[name=email]").val());
                    $("#cta_form_enviar").attr("disabled", true).addClass("error").html("Error. Intentar luego.");
                    setTimeout(function () {
                        $("#cta_form_enviar").attr("disabled", false).removeClass("error").html("SUMATE");
                    }, 5000);
                }
			},
			error: function (jqXHR, textStatus, errorThrown) {
				ga("send", "event", "Formulario", "Error", "SUMATE: " + $("[name=email]").val());
				$("#cta_form_enviar").attr("disabled", true).addClass("error").html("Error. Intentar luego.");
				setTimeout(function () {
					$("#cta_form_enviar").attr("disabled", false).removeClass("error").html("SUMATE");
				}, 5000);
			}
		});
	});
});