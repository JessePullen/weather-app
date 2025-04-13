import { translateWeatherIconFileName } from './weatherIcons';

function displayWeatherInfo(data) {
	const weatherInfoElements = document.querySelectorAll('.weather-info');
	const temperatureUnitsCheckbox = document.querySelector('.temperature-units');
	const weatherImage = document.querySelector('.weather-image');

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

	// Removes old image if present
	weatherImage.innerHTML = '';

	const myIcon = new Image();
	myIcon.src = translateWeatherIconFileName(data.weatherIcon);
	weatherImage.appendChild(myIcon);

	setTheme(data.weatherIcon);
}

// Converts temperature from fahrenheit to elcius capped at 1 decimal place
// This is done in this module to avoid calling the API again when the data is saved in object
function convertFahrenheitToCelcius(temperature) {
	return ((temperature - 32) / 1.8).toFixed(1);
}

function convertCelciusToFahrenheit(temperature) {
	return (temperature * 1.8 + 32).toFixed(1);
}

function setTheme(weather) {
	const body = document.querySelector('body');
	const header = document.querySelector('.header');
	const information = document.querySelector('.information');
	const icons = document.querySelectorAll('.weather-icon');
	if (weather.includes('night')) {
		body.classList.add('night');
		header.classList.add('night');
		information.classList.add('night');
		for (let icon of icons) {
			icon.classList.add('night');
		}
	} else {
		body.classList.remove('night');
		header.classList.remove('night');
		information.classList.remove('night');
		for (let icon of icons) {
			icon.classList.remove('night');
		}
	}
}

export { displayWeatherInfo, convertFahrenheitToCelcius, convertCelciusToFahrenheit };
