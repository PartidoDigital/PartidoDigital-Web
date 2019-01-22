$(function () {
	$("#sumarme").bind("click", function () {
        var params = {
            "mauticform[nombre]": $("[name=nombre]").val(),
            "mauticform[apellido]": $("[name=apellido]").val(),
            "mauticform[email]": $("[name=email]").val(),
            "mauticform[celular]": $("[name=celular]").val(),
            "mauticform[ciudad]": $("[name=ciudad]").val(),
            "mauticform[fechanacimiento]": $("[name=fechanacimiento]").val(),
            "mauticform[submit]": 1,
            "mauticform[formId]": 7,
            "mauticform[formName]": "voluntariado",
            "mauticform[return]": ""
        };
        $("input:checked").each(function(i, e) {
            params["mauticform[voluntario]["+i+"]="] = $(e).val();
        });
		$.ajax({
			method: "post",
			url: "https://info.partidodigital.org.uy/form/submit?formId=7&ajax=true",
			headers: { 'X-Requested-With': 'XMLHttpRequest' },
			dataType: "json",
			data: $.param(params),
			beforeSend: function () {
				if ($("[name=nombre]").val() === "" || $("[name=apellido]").val() === "" ||
					$("[name=email]").val() === "" || $("[name=celular]").val() === "" ||
                    $("[name=ciudad]").val() === "" || $("[name=fechanacimiento]").val() === "" ||
                    $("input:checked").length === 0) {
					$("#sumarme").attr("disabled", true).addClass("error").val("Queda algún campo por llenar. Intentalo de nuevo.");
					setTimeout(function () {
						$("#sumarme").attr("disabled", false).removeClass("error").val("SUMARME");
					}, 5000);
					return false;
				}
				$("#sumarme").attr("disabled", true).val("Enviando...");
			},
			success: function () {
                ga("send", "event", "Formulario", "Enviado", "Voluntariado");
                $("#sumarme").attr("disabled", true).val("Datos enviados. ¡Gracias por sumarte!");
                setTimeout(function () {
                    $("#volun").trigger("reset");
                    $("#sumarme").attr("disabled", false).val("SUMARME");
                }, 5000);
			},
			error: function (jqXHR, textStatus, errorThrown) {
				ga("send", "event", "Formulario", "Error", "Voluntariado: " + $("[name=email]").val() + " | " + $("[name=nombre]").val() + " | " + $("[name=apellido]").val());
				$("#sumarme").attr("disabled", true).addClass("error").val("Hubo un error al enviar tus datos. Prueba de nuevo.");
				setTimeout(function () {
					$("#sumarme").attr("disabled", false).removeClass("error").val("SUMARME");
				}, 5000);
			}
		});
	});
});
