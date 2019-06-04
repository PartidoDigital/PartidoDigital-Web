$(function () {
	$("#pedir-listas").bind("click", function () {
        var params = {
            "mauticform[nombre]": $("[name=nombre]").val(),
            "mauticform[apellido]": $("[name=apellido]").val(),
            "mauticform[email]": $("[name=email]").val(),
            "mauticform[departamento]": $("[name=departamento]").val(),
            "mauticform[direccion]": $("[name=direccion]").val(),
			"mauticform[credencial]": $("[name=credencial]").val(),
			"mauticform[celular]": $("[name=celular]").val(),
			"mauticform[cantidad]": $("[name=cantidad]").val(),
            "mauticform[submit]": 1,
            "mauticform[formId]": 9,
            "mauticform[formName]": "listas",
            "mauticform[return]": ""
        };
		$.ajax({
			method: "post",
			url: "https://info.partidodigital.org.uy/form/submit?formId=9&ajax=true",
			headers: { 'X-Requested-With': 'XMLHttpRequest' },
			dataType: "json",
			data: $.param(params),
			beforeSend: function () {
				if ($("[name=nombre]").val() === "" || $("[name=apellido]").val() === "" ||
					$("[name=email]").val() === "" || $("[name=celular]").val() === "" ||
                    $("[name=departamento]").val() === "" || $("[name=direccion]").val() === "" || $("[name=cantidad]").val() === "") {
					$("#pedir-listas").attr("disabled", true).addClass("error").val("Queda algún campo por llenar. Intentalo de nuevo.");
					setTimeout(function () {
						$("#pedir-listas").attr("disabled", false).removeClass("error").val("PEDIR LISTAR");
					}, 5000);
					return false;
				}
				$("#pedir-listas").attr("disabled", true).val("Enviando...");
			},
			success: function () {
				ga("send", "event", "Formulario", "Enviado", "Listas");
				window.location.href = "/gracias-listas";
			},
			error: function (jqXHR, textStatus, errorThrown) {
				ga("send", "event", "Formulario", "Error", "Listas: " + $("[name=email]").val() + " | " + $("[name=nombre]").val() + " | " + $("[name=apellido]").val());
				$("#pedir-listas").attr("disabled", true).addClass("error").val("Hubo un error al enviar tus datos. Prueba de nuevo.");
				setTimeout(function () {
					$("#pedir-listas").attr("disabled", false).removeClass("error").val("PEDIR LISTAS");
				}, 5000);
			}
		});
	});
});
