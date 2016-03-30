$('document').ready(function(){
	var temperature=$('.temperature');
	var condition=$('.condition');
	var city=$('.city');
	var degree=$('.degree');
	var fah = 0;
	var cel = 0;
	var changeTemp=true;
	var weather=$('.weather');
	var changeWeather=0;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
  		var lat=position.coords.latitude;
  		var lon=position.coords.longitude;
  			$.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&&appid=9386fd4cea00d144320986284f07bb2f", function(data){
					fah=Math.round((data.main.temp-273.15)*1.8+32);
					cel=Math.round(data.main.temp-273.15);
					temperature.text(fah);
					city.text(data.name);
					
					changeWeather=data.weather[0].id;
					     
    console.log(data.weather);
    if(changeWeather!=800)
    {
    	changeWeather=Math.floor(changeWeather/100);
    }
    console.log(changeWeather);
    switch(changeWeather){
    	case 2:
    	changeWeather="thunder-storm";
    	break;
    	case 3:
    	case 5:
        case 7:
    	changeWeather="rainy";
    	break;
    	case 6:
    	changeWeather="flurries";
    	break;
    	case 8:
    	changeWeather="cloudy";
    	break;
    	case 800:
    	default:
    	changeWeather="sunny";
    }


    weather.each(function(){
    	
    	if($(this).hasClass(changeWeather))
    	{
    		$(this).css('display','inline-block');
    	}

    });
			});
	});

    } else {
        location.innerHTML = "Geolocation is not supported by this browser.";
    }

    




    degree.on('click',function(){
    	degree.toggle();
    	convert();
    });


    function convert(){
    	if(changeTemp)
    	{
    		temperature.text(cel);
    	}
    	else
    	{
    		temperature.text(fah);
    	}
    	changeTemp=!changeTemp;
    	
    }





});


