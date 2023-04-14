const createVenueHTML = (name, location, iconSource,index) => {
if(index==0){
		var originalHref = $("#click3").attr("href");
			$("#click3").click(function(){
				newHref = originalHref.replace("3/", "3/"+ name+"+"+ location.city);
				return $("#click3").attr("href", newHref);
			  });
	}else if(index==1){
			var originalHref = $("#click4").attr("href");
				$("#click4").click(function(){
					newHref = originalHref.replace("3/", "3/"+ name+"+"+ location.city);
					return $("#click4").attr("href", newHref);
				  });
		}else if(index==2){
				var originalHref = $("#click5").attr("href");
					$("#click5").click(function(){
						newHref = originalHref.replace("3/", "3/"+ name+"+"+ location.city);
						return $("#click5").attr("href", newHref);
					  });
			}else if(index==3){
					var originalHref = $("#click6").attr("href");
						$("#click6").click(function(){
							newHref = originalHref.replace("3/", "3/"+ name+"+"+ location.city);
							return $("#click6").attr("href", newHref);
						  });
			}else if(index==4){
					var originalHref = $("#click7").attr("href");
						$("#click7").click(function(){
							newHref = originalHref.replace("3/", "3/"+ name+"+"+ location.city);
							return $("#click7").attr("href", newHref);
						  });
		}else if(index==5){
				var originalHref = $("#click8").attr("href");
					$("#click8").click(function(){
						newHref = originalHref.replace("3/", "3/"+ name+"+"+ location.city);
						return $("#click8").attr("href", newHref);
					  });
			}else if(index==6){
					var originalHref = $("#click9").attr("href");
						$("#click9").click(function(){
							newHref = originalHref.replace("3/", "3/"+ name+"+"+ location.city);
							return $("#click9").attr("href", newHref);
						  });
	}else if(index==7){
			var originalHref = $("#click10").attr("href");
				$("#click10").click(function(){
					newHref = originalHref.replace("3/", "3/"+ name+"+"+ location.city);
					return $("#click10").attr("href", newHref);
				  });
	}
/*for (var i = 0; i < index; i++) {
	var originalHref = $("#click3").attr("href");
		$("#click3").click(function(){
			newHref = originalHref.replace("3/", "3/"+ name+"+"+ location.city);
			return $("#click3").attr("href", newHref);
		  });
	}*/
		// $(document).ready(function() {
			// Get the initial href value for all links
			/*var originalHrefs = $("#click3").map(function() {
			  return $(this).attr("href");
			}).get();
			
			// Set the href attribute to the new value when the input field chan
			  $("#click3").each(function(index) {
				var newHref = originalHrefs[index].replace("3/", "3/" + name+"+"+location.city);
				return $(this).attr("href", newHref);
			  });*/
			//});
	return `<h2>${name}</h2>
  <img class="venueimage" src="${iconSource}"/>
  <h3>Address:</h3> 
  <p>${location.address}</p>
  <p>${location.city}</p>	
  <p>${location.country}</p>`;
};

const createWeatherHTML = (currentDay) => {
	console.log(currentDay);
	return `<h2>day:${weekDays[new Date().getDay()]}</h2>
	        <h2>month:${monthNames[new Date().getMonth()]}</h2>
		<h2>Temperature: ${kelvinToFahrenheit(currentDay.main.temp)}&deg;F</h2>
		<h2>Condition: ${currentDay.weather[0].description}</h2>
  	<img src="https://openweathermap.org/img/wn/${currentDay.weather[0].icon}@2x.png">`;
};
const createWeatherHTML1 = (currentDay1) => {
	console.log(currentDay1);
	return ` <h2>Condition: ${currentDay1.list[39].weather[0].main}</h2>
	<h2>day:${weekDays[new Date().getDay()+4]}
	<h2>Condition: ${currentDay1.list[39].weather[0].description}</h2>
		<h2>Temperature: ${kelvinToFahrenheit(currentDay1.list[39].main.temp)}&deg;F</h2>
  	<img src="https://openweathermap.org/img/wn/${currentDay1.list[39].weather[0].icon}@2x.png">`;
};
/*const createWeatherHTML3 = (currentDay3) => {
	return `<img src=${currentDay3.hits[0].webformatURL}>`

};*/


const kelvinToFahrenheit = (k) => ((k - 273.15) * 9 / 5 + 32).toFixed(0);