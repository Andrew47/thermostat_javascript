  $( document ).ready(function () {

    alert( "welcome" );

    var thermostat = new Thermostat();
    updateTemperature();


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



    function color_generator() {
      if (thermostat.energyUsage() == 'low-usage') {
        $("#temperature").css('color', 'green');
      }

      if (thermostat.energyUsage() == 'medium-usage') {
        $("#temperature").css('color', 'orange');
      }

      if (thermostat.energyUsage() == 'high-usage') {
        $("#temperature").css('color', 'red');
      }
    }

    function updateTemperature() {
      $('#temperature').text(thermostat.temperature);
      // $('#temperature').attr('class', thermostat.energyUsage());
      color_generator();
    }

  });
