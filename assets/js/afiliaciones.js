$(function () {
	$("#afiliarme").bind("click", function () {
		$.ajax({
			method: "post",
			url: "https://info.partidodigital.org.uy/form/submit?formId=5",
			dataType: "json",
			data: $.param({
				"mauticform[email]": $("[name=email]").val(),
				"mauticform[nombre]": $("[name=nombre]").val(),
				"mauticform[apellido]": $("[name=apellido]").val(),
				"mauticform[ciudad]": $("[name=ciudad]").val(),
				"mauticform[telefono]": $("[name=telefono]").val(),
				"mauticform[afiliacion]": $("[name=afiliacion]").val(),
				"mauticform[submit]": 1,
				"mauticform[formId]": 5,
				"mauticform[formName]": "afiliaciones",
				"mauticform[return]": ""
			}),
			beforeSend: function () {
				if ($("[name=email]").val() === "" || $("[name=nombre]").val() === "" ||
					$("[name=apellido]").val() === "" || $("[name=ciudad]").val() === "" ||
					$("[name=telefono]").val() === "" || $("[name=afiliacion]").val() === "") {
					$("#afiliarme").attr("disabled", true).addClass("error").val("Queda algún campo por llenar. Intentalo de nuevo.");
					setTimeout(function () {
						$("#afiliarme").attr("disabled", false).removeClass("error").val("Afiliarme al Partido Digital");
					}, 5000);
					return false;
				}
				$("#afiliarme").attr("disabled", true).val("Enviando...");
			},
			error: function () {
				ga("send", "event", "Formulario", "Enviado", "Afiliación");
				window.location.href = "/afiliacion/" + $("[name=afiliacion]").val();
			}
		});
	});
});
