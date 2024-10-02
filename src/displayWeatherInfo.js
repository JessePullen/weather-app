function displayWeatherInfo(data) {
	const weatherInfoElements = document.querySelectorAll('.weather-info');
	const temperatureUnitsCheckbox = document.querySelector('.temperature-units');

	// Checked by default = celcius, unchecked = fahrenheit
	if (temperatureUnitsCheckbox.checked) {
		data.temperature = convertFahrenheitToCelcius(data.temperature);
	}

	weatherInfoElements[0].textContent = data.city;
	weatherInfoElements[1].textContent = `Temperature: ${data.temperature} degrees`;
	weatherInfoElements[2].textContent = `Conditions: ${data.conditions}`;
	weatherInfoElements[3].textContent = `Precipitation chance: ${data.precipitatonChance}%`;
	weatherInfoElements[4].textContent = `Humidity: ${data.humidity}%`;
	weatherInfoElements[5].textContent = `Wind speed: ${data.windSpeed} km/h`;
}

// Converts temperature from fahrenheit to elcius capped at 1 decimal place
// This is done in this module to avoid calling the API again when the data is saved in object
function convertFahrenheitToCelcius(temperature) {
	return ((temperature - 32) / 1.8).toFixed(1);
}

export { displayWeatherInfo };
