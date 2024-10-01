function displayWeatherInfo(data) {
	const weatherInfoElements = document.querySelectorAll('.weather-info');

	weatherInfoElements[0].textContent = data.city;
	weatherInfoElements[1].textContent += ` ${data.temperature}`;
	weatherInfoElements[2].textContent += ` ${data.conditions}`;
	weatherInfoElements[3].textContent += ` ${data.precipitatonChance}`;
	weatherInfoElements[4].textContent += ` ${data.humidity}`;
	weatherInfoElements[5].textContent += ` ${data.windSpeed}`;
}

export { displayWeatherInfo };
