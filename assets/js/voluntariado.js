$(function () {
	function param(name) {
		return (location.search.split(name + '=')[1] || '').split('&')[0];
	}

	if(param("email")) {
		$("input.email").val(param("email"));
		$("input.email").attr("disabled", true);
	}

	$("#sumarme").bind("click", function () {
		$.ajax({
			method: "post",
			url: "https://info.partidodigital.org.uy/form/submit?formId=7&ajax=true",
			headers: { 'X-Requested-With': 'XMLHttpRequest' },
			dataType: "json",
			data: $.param({
				"mauticform[nombre]": $("[name=nombre]").val(),
				"mauticform[apellido]": $("[name=apellido]").val(),
				"mauticform[email]": $("[name=email]").val(),
				"mauticform[celular]": $("[name=celular]").val(),
				"mauticform[departamento1]": $("[name=departamento1]").val(),
				"mauticform[fechanacimiento]": $("[name=fechanacimiento]").val(),
				"mauticform[voluntario][0]": "todo",
				"mauticform[submit]": 1,
				"mauticform[formId]": 7,
				"mauticform[formName]": "voluntariado",
				"mauticform[return]": ""
			}),
			beforeSend: function () {
				if ($("[name=nombre]").val() === "" || $("[name=apellido]").val() === "" ||
					$("[name=email]").val() === "" || $("[name=celular]").val() === "" ||
                    $("[name=departamento1]").val() === "" || $("[name=fechanacimiento]").val() === "") {
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
				window.location.href = "/gracias-voluntario";
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
