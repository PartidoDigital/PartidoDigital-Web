$(document).ready(function() {
    $('#objetivos').stepProgressBar({
        currentValue: 30000,
        steps: [
          {
            value: 2000,
            bottomLabel: 'Actividades y otros gastos'
          },
          {
            value: 12000,
            bottomLabel: 'Impresión de listas'
          },
          {
            value: 30000, 
            bottomLabel: 'Promoción y marketing'
          }
        ],
        unit: 'USD'
    });
    //$(".step-progressbar-step:eq(1)").css("borderColor", "#f83600")
});
