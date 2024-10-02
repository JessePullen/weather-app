function displayWeatherInfo(data) {
	const weatherInfoElements = document.querySelectorAll('.weather-info');

	weatherInfoElements[0].textContent = data.city;
	weatherInfoElements[1].textContent = `Temperature: ${data.temperature}`;
	weatherInfoElements[2].textContent = `Conditions: ${data.conditions}`;
	weatherInfoElements[3].textContent = `Precipitation chance: ${data.precipitatonChance}`;
	weatherInfoElements[4].textContent = `Humidity: ${data.humidity}`;
	weatherInfoElements[5].textContent = `Wind speed: ${data.windSpeed} km/h`;
}

export { displayWeatherInfo };
