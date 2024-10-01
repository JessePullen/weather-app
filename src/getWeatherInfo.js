import { displayWeatherInfo } from '../displayWeatherInfo';

async function getWeatherInfo(location) {
	const url = addLocation(location);

	try {
		const response = await fetch(url);
		const data = await response.json();
		const sortedData = sortWeatherInfo(data);
		displayWeatherInfo(sortedData);
	} catch {
		window.alert('City could not be found, please try again.');
	}
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

function sortWeatherInfo(data) {
	const sortedData = {
		city: data.resolvedAddress,
		temperature: data.currentConditions.temp,
		conditions: data.currentConditions.conditions,
		precipitatonChance: data.currentConditions.precipprob,
		humidity: data.currentConditions.humidity,
		windSpeed: data.currentConditions.windspeed,
		weatherIcon: data.currentConditions.icon,
	};
	return sortedData;
}

export { getWeatherInfo };
