jQuery(function () {
	document.querySelector('.styled-checkbox').onchange = function () {
		document.querySelector('#afiliarme').disabled = !this.checked;
		document.querySelector('#afiliarme').title = !this.checked ? "Debes marcar que te comprometes para afiliarte" : "";
	};

	$("#afiliarme").bind("click", function () {
		$.ajax({
			method: "post",
			url: "https://info.partidodigital.org.uy/form/submit?ajax=true",
			headers: { 'X-Requested-With': 'XMLHttpRequest' },
			dataType: "json",
			data: $.param({
				"mauticform[nombre]": $("[name=nombre]").val(),
				"mauticform[apellido]": $("[name=apellido]").val(),
				"mauticform[email]": $("[name=email]").val(),
				"mauticform[celular]": $("[name=celular]").val(),
				"mauticform[ciudad]": $("[name=ciudad]").val(),
				"mauticform[barrio]": $("[name=barrio]").val(),
				"mauticform[domicilio]": $("[name=domicilio]").val(),
				"mauticform[cedula]": $("[name=cedula]").val(),
				"mauticform[fechanacimiento]": $("[name=fechanacimiento]").val(),
				"mauticform[submit]": 1,
				"mauticform[formId]": 3,
				"mauticform[formName]": "afiliacion",
				"mauticform[return]": ""
			}),
			beforeSend: function () {
				if ($("[name=nombre]").val() === "" || $("[name=apellido]").val() === "" ||
					$("[name=email]").val() === "" || $("[name=celular]").val() === "" ||
					$("[name=ciudad]").val() === "" || $("[name=barrio]").val() === "" ||
					$("[name=domicilio]").val() === "" || $("[name=cedula]").val() === "" ||
					$("[name=fechanacimiento]").val() === "") {
					$("#afiliarme").attr("disabled", true).addClass("error").val("Queda algún campo por llenar. Intentalo de nuevo.");
					setTimeout(function () {
						$("#afiliarme").attr("disabled", false).removeClass("error").val("Afiliarme al Partido Digital");
					}, 5000);
					return false;
				}
				$("#afiliarme").attr("disabled", true).val("Enviando...");
			},
			success: function () {
				ga("send", "event", "Formulario", "Enviado", "Afiliación");
				window.location.href = "https://www.mercadopago.com/mlu/checkout/start?pref_id=441941744-0daa7008-66a0-40da-9f64-2584fe9a810e";
			},
			error: function (jqXHR, textStatus, errorThrown) {
				ga("send", "event", "Formulario", "Error", "Afiliación: " + $("[name=email]").val() + " | " + $("[name=nombre]").val() + " | " + $("[name=apellido]").val());
				$("#afiliarme").attr("disabled", true).addClass("error").val("Hubo un error al enviar tus datos. Prueba de nuevo.");
				setTimeout(function () {
					$("#afiliarme").attr("disabled", false).removeClass("error").val("Afiliarme al Partido Digital");
				}, 5000);
			}
		});
	});
});
