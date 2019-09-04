$(document).ready(function() {
    $('#objetivos').stepProgressBar({
        currentValue: 0,
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
});