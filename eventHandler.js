  $( document ).ready(function () {

    alert( "welcome" );

    var thermostat = new Thermostat();

    updateTemperature();

    $("#temperature_up").hover(
      function () { $('h2').css("backgroundColor", "rgb(255, 229, 255)"); },
      function () { $('h2').css("backgroundColor", "white"); });

      $("#temperature_down").hover(
        function () { $('h2').css("backgroundColor", "rgb(229, 242, 255)"); },
        function () { $('h2').css("backgroundColor", "white"); });



    $("#temperature_up").click( function () {
      thermostat.upButton();
      updateTemperature();
    });

    $("#temperature_down").click( function () {
      thermostat.downButton();
      updateTemperature();
    });

    $("#temperature_reset").click( function () {
      thermostat.resetButton();
      updateTemperature();
    });

    $("#power_saving_status").text( thermostat.isPowerSavingOn());

    $("#power_saving_switch").click( function () {
      thermostat.powerSavingSwitch();
      $("#power_saving_status").text( thermostat.isPowerSavingOn());
    });

    function updateTemperature() {
      $('#temperature').text(thermostat.temperature);
      $('#temperature').attr('class', thermostat.energyUsage());
    }

  });
