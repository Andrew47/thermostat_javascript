  $( document ).ready(function () {

    alert( "welcome" );

    var thermostat = new Thermostat();

    updateTemperature();
    get_data ();

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

    function get_data (name) {

    var city_name = name || 'London';
    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city_name;
    var token = "&APPID=4db7936adac8e360e07f2f6e0b70d42f";

    $.ajax({

    url: url + token,

    type: "GET",

    dataType : "json",

    data: {
      units: "metric"
    },

    success: function( json ) {
      $( "#name" ).text( json.name );
      $("#condition").text( json.weather[0].main + ': ' + json.weather[0].description);
      $("#retrieved_temperature").text( Math.round(json.main.temp) + 'C');
      $("#wind").text(json.wind.speed + ' meter/sec');
    }

  });}

  $('#submit_name').click(function() {
    get_data($('#name_input').val());
  });

  });
