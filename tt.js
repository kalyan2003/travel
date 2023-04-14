const clientId = 'OZATO4USDMG5ZYJMKY54YTK4Y2TPDWK34PSUG3GIV0RULAXP';
const clientSecret = 'OSXQJ50AFX20J2HNOHKFGPWKVVNYNSP13IOGOB5YETXLPLR4';
const url = 'https://api.foursquare.com/v2/venues/explore?near=';

// OpenWeather Info
const openWeatherKey = '7d20a5895a38a13dcdbb647529a3d4ca';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';
//5 day forecast
const openWeatherKey1 = '8c8a69668bf6a4341f61a3bf5e833bbd';
const weatherUrl1 = 'https://api.openweathermap.org/data/2.5/forecast';
//background
const weatherUrl2='https://pixabay.com/api/'
// Page Elements
const $input = $('#city'); 
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [ $('#venue1'), $('#venue2'), $('#venue3'), $('#venue4'),$('#venue5'),$('#venue6'),$('#venue7'),$('#venue8')];
const $weatherDiv = $('#weather1');
const $weatherDiv1= $('#weather5');
const $back1=$('#back');
const $click1=$('#click2');
const weekDays = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
/*async function getbackground() {
	const urlToFetch = `${weatherUrl2}?key=35269620-98ee0c8403501b5e12196cd0b&q=${$input.val()}&image_type=photo&pretty=true`;
	try {
		const response = await fetch(urlToFetch);
		if (response.ok) {
			const jsonResponse = await response.json();
			return jsonResponse;
		}
	} catch (error) {
		console.log(error);
	}
}*/
const getVenues = async () => {
	const city = $input.val();
	const urlToFetch = `${url}${city}&limit=10&client_id=${clientId}&client_secret=${clientSecret}&v=20180101`;
	// add try and catch
	try {
		const response = await fetch(urlToFetch);
		if (response.ok) {
			const jsonResponse = await response.json();
			const venues = jsonResponse.response.groups[0].items.map((item) => item.venue);
			console.log(venues);
			return venues;
		}
	} catch (error) {
		console.log(error);
	}
};

// get Data from OpenWeather
const getForecast = async () => {
	const urlToFetch = `${weatherUrl}?&q=${$input.val()}&APPID=${openWeatherKey}`;
	try {
		const response = await fetch(urlToFetch);
		if (response.ok) {
			const jsonResponse = await response.json();
			return jsonResponse;
		}
	} catch (error) {
		console.log(error);
	}
};
const get5dayForecast = async () => {
	const urlToFetch = `${weatherUrl1}?&q=${$input.val()}&appid=${openWeatherKey1}`;
	try {
		const response = await fetch(urlToFetch);
		if (response.ok) {
			const jsonResponse = await response.json();
			return jsonResponse;
		}
	} catch (error) {
		console.log(error);
	}
};

// Render functions
const renderVenues = (venues) => {
	$venueDivs.forEach(($venue, index) => {
		const venue = venues[index];
		const venueIcon = venue.categories[0].icon;
		const venueImgSrc = `${venueIcon.prefix}bg_64${venueIcon.suffix}`;
		let venueContent = createVenueHTML(venue.name, venue.location, venueImgSrc,index);
		/*if(index==0){
		let venueContent = createVenueHTML(venue.name, venue.location, venueImgSrc,venue);
	}else if(index==1){
			let venueContent = createVenueHTML(venue.name, venue.location, venueImgSrc,venue);
		}else if(index==2){
				let venueContent = createVenueHTML(venue.name, venue.location, venueImgSrc,venue);
			}else if(index==3){
					let venueContent = createVenueHTML(venue.name, venue.location, venueImgSrc,venue);
			}else if(index==4){
			let venueContent = createVenueHTML(venue.name, venue.location, venueImgSrc,index);
		}else if(index==5){
				let venueContent = createVenueHTML(venue.name, venue.location, venueImgSrc,index);
			}else if(index==6){
		let venueContent = createVenueHTML(venue.name, venue.location, venueImgSrc,index);
	}else if(index==7){
		let venueContent = createVenueHTML(venue.name, venue.location, venueImgSrc,index);
	}*/
			$venue.append(venueContent);
	});
	$destination.append(`<h2>${venues[0].location.city}</h2>`);
};
/*const renderbackground = (backg) => {
	const backgroundContent = createWeatherHTML3(backg);
	$back1.append( backgroundContent);
};*/
const renderForecast = (day) => {
	const weatherContent = createWeatherHTML(day);
	$weatherDiv.append(weatherContent);
};
const renderForecast1 = (day1) => {
	const weatherContent1 = createWeatherHTML1(day1);
	$weatherDiv1.append(weatherContent1);
};
const executeSearch = () => {
	$venueDivs.forEach((venue) => venue.empty());
	$weatherDiv.empty();
	$weatherDiv1.empty();
	$destination.empty();
	$back1.empty();
	$container.css('visibility', 'visible');
	getVenues().then((venues) => renderVenues(venues));
	getForecast().then((forecast) => renderForecast(forecast));
	get5dayForecast().then((weather) => renderForecast1(weather));
	//getbackground().then((back1g)=>renderbackground(back1g));
$(document).ready(function(){
	var originalHref = $("#click2").attr("href");
	$("#click2").click(function(){
		var userInput = $input.val();
		var newHref = originalHref.replace("3/", "3/" + userInput);
		$(this).attr("href", newHref);
	  });
	});
	return false;
};

$submit.click(executeSearch);