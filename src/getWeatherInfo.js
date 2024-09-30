async function getWeatherInfo(location) {
	const url = addLocation(location);

	const response = await fetch(url);
	const data = await response.json();
	console.log(data);
}

// Adds location to template url for API
function addLocation(location) {
	const templateUrl =
		'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/?unitGroup=us&key=4PXUNQF6XEB3JUH9ASRHNWAYK&contentType=json';

	const convertedLocation = convertLocationString(location);

	const splitUrl = templateUrl.split('?');
	const urlWithLocation = splitUrl[0] + convertedLocation + '?' + splitUrl[1];

	return urlWithLocation;
}

// Converts inputted string to work in url for visualcrossing weather API
function convertLocationString(location) {
	return location.replace(' ', '%20');
}

export { getWeatherInfo };
