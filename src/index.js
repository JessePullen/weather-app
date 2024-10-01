import './style.css';
import { getWeatherInfo } from './getWeatherInfo';

const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');

searchButton.addEventListener('click', (event) => {
	// Prevents form submission
	event.preventDefault();
	getWeatherInfo(searchInput.value);
	searchInput.value = '';
});

const weatherInfoElements = document.querySelectorAll('.weather-info');

console.log(weatherInfoElements);
