$(function () {
	$("#donar").bind("click", function () {
		$.ajax({
			method: "post",
			url: "https://info.partidodigital.org.uy/form/submit?ajax=true",
			headers: { 'X-Requested-With': 'XMLHttpRequest' },
			dataType: "json",
			data: $.param({
				"mauticform[nombre]": $("[name=nombre]").val(),
                "mauticform[apellido]": $("[name=apellido]").val(),
                "mauticform[email]": $("[name=email]").val(),
				"mauticform[documento]": $("[name=documento]").val(),
				"mauticform[direccion]": $("[name=direccion]").val(),
				"mauticform[cantidad]": $("[name=cantidad]").val(),
				"mauticform[submit]": 1,
				"mauticform[formId]": 2,
				"mauticform[formName]": "donarbtc",
				"mauticform[return]": ""
			}),
			beforeSend: function () {
				if ($("[name=nombre]").val() === "" || $("[name=apellido]").val() === "" ||
					$("[name=documento]").val() === "" || $("[name=direccion]").val() === "" ||
                    $("[name=email]").val() === "" || $("[name=cantidad]").val() === "") {
					$("#donar").attr("disabled", true).addClass("error").val("Queda algún campo por llenar. Intentalo de nuevo.");
					setTimeout(function () {
						$("#donar").attr("disabled", false).removeClass("error").val("DONAR");
					}, 5000);
					return false;
				}
				$("#donar").attr("disabled", true).val("Enviando...");
			},
			success: function (result) {
                if(result.success === 1) {
                    ga("send", "event", "Formulario", "Enviado", "DonarBTC");
				    window.location.href = "/gracias-donarbtc";
                } else {
                    ga("send", "event", "Formulario", "Error", "DonarBTC: " + $("[name=email]").val() + " | " + $("[name=nombre]").val() + " | " + $("[name=apellido]").val());
				    $("#donar").attr("disabled", true).addClass("error").val("Hubo un error al enviar tus datos. Prueba de nuevo.");
                    setTimeout(function () {
                        $("#donar").attr("disabled", false).removeClass("error").val("DONAR");
                    }, 5000);
                }				
			},
			error: function (jqXHR, textStatus, errorThrown) {
				ga("send", "event", "Formulario", "Error", "DonarBTC: " + $("[name=email]").val() + " | " + $("[name=nombre]").val() + " | " + $("[name=apellido]").val());
				$("#donar").attr("disabled", true).addClass("error").val("Hubo un error al enviar tus datos. Prueba de nuevo.");
				setTimeout(function () {
					$("#donar").attr("disabled", false).removeClass("error").val("DONAR");
				}, 5000);
			}
		});
	});
});
