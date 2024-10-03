import './style.css';
import { getWeatherInfo } from './getWeatherInfo';
import { convertCelciusToFahrenheit, convertFahrenheitToCelcius } from './displayWeatherInfo';

const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');
const temperatureUnitsCheckbox = document.querySelector('.temperature-units');

searchButton.addEventListener('click', (event) => {
	// Prevents form submission
	event.preventDefault();
	getWeatherInfo(searchInput.value);
	searchInput.value = '';
});

temperatureUnitsCheckbox.addEventListener('click', () => {
	const temperature = document.querySelector('.temperature');

	if (temperatureUnitsCheckbox.checked) {
		temperature.textContent = convertFahrenheitToCelcius(temperature.textContent);
	} else if (!temperatureUnitsCheckbox.checked) {
		temperature.textContent = convertCelciusToFahrenheit(temperature.textContent);
	}
});
