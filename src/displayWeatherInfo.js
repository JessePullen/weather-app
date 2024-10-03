function displayWeatherInfo(data) {
	const weatherInfoElements = document.querySelectorAll('.weather-info');
	const temperatureUnitsCheckbox = document.querySelector('.temperature-units');

	// Checked by default = celcius, unchecked = fahrenheit
	if (temperatureUnitsCheckbox.checked) {
		data.temperature = convertFahrenheitToCelcius(data.temperature);
	}

	weatherInfoElements[0].textContent = data.city;
	weatherInfoElements[1].textContent = data.conditions;
	weatherInfoElements[2].textContent = data.temperature;
	weatherInfoElements[3].textContent = data.precipitatonChance + '%';
	weatherInfoElements[4].textContent = data.humidity + '%';
	weatherInfoElements[5].textContent = data.windSpeed + 'km/h';
}

// Converts temperature from fahrenheit to elcius capped at 1 decimal place
// This is done in this module to avoid calling the API again when the data is saved in object
function convertFahrenheitToCelcius(temperature) {
	return ((temperature - 32) / 1.8).toFixed(1);
}

export { displayWeatherInfo };
