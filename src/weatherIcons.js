import clearDayIcon from './assets/WeatherIcons-main/SVG/2nd Set - Color/clear-day.svg';
import clearNightIcon from './assets/WeatherIcons-main/SVG/2nd Set - Color/clear-night.svg';
import cloudyIcon from './assets/WeatherIcons-main/SVG/2nd Set - Color/cloudy.svg';
import fogIcon from './assets/WeatherIcons-main/SVG/2nd Set - Color/fog.svg';
import hailIcon from './assets/WeatherIcons-main/SVG/2nd Set - Color/hail.svg';
import partlyCloudyDayIconIcon from './assets/WeatherIcons-main/SVG/2nd Set - Color/partly-cloudy-day.svg';
import partlyCloudyNightIcon from './assets/WeatherIcons-main/SVG/2nd Set - Color/partly-cloudy-night.svg';
import rainSnowShowersDayIcon from './assets/WeatherIcons-main/SVG/2nd Set - Color/rain-snow-showers-day.svg';
import rainSnowShowersNightIcon from './assets/WeatherIcons-main/SVG/2nd Set - Color/rain-snow-showers-night.svg';
import rainSnowIcon from './assets/WeatherIcons-main/SVG/2nd Set - Color/rain-snow.svg';
import rainIcon from './assets/WeatherIcons-main/SVG/2nd Set - Color/rain.svg';
import showersDayIcon from './assets/WeatherIcons-main/SVG/2nd Set - Color/showers-day.svg';
import showersNightIcon from './assets/WeatherIcons-main/SVG/2nd Set - Color/showers-night.svg';
import sleetIcon from './assets/WeatherIcons-main/SVG/2nd Set - Color/sleet.svg';
import snowShowersDayIcon from './assets/WeatherIcons-main/SVG/2nd Set - Color/snow-showers-day.svg';
import snowShowersNightIcon from './assets/WeatherIcons-main/SVG/2nd Set - Color/snow-showers-night.svg';
import snowIcon from './assets/WeatherIcons-main/SVG/2nd Set - Color/snow.svg';
import thunderRainIcon from './assets/WeatherIcons-main/SVG/2nd Set - Color/thunder-rain.svg';
import thunderShowersDayIcon from './assets/WeatherIcons-main/SVG/2nd Set - Color/thunder-showers-day.svg';
import thunderShowersNightIcon from './assets/WeatherIcons-main/SVG/2nd Set - Color/thunder-showers-night.svg';
import thunderIcon from './assets/WeatherIcons-main/SVG/2nd Set - Color/thunder.svg';
import windIcon from './assets/WeatherIcons-main/SVG/2nd Set - Color/wind.svg';

const weatherIcons = {
	clearDay: clearDayIcon,
	clearNight: clearNightIcon,
	cloudy: cloudyIcon,
	fog: fogIcon,
	hail: hailIcon,
	partlyCloudyDay: partlyCloudyDayIconIcon,
	partlyCloudyNight: partlyCloudyNightIcon,
	rainSnowShowersDay: rainSnowShowersDayIcon,
	rainSnowShowersNight: rainSnowShowersNightIcon,
	rainSnow: rainSnowIcon,
	rain: rainIcon,
	showersDay: showersDayIcon,
	showersNight: showersNightIcon,
	sleet: sleetIcon,
	snowShowersDay: snowShowersDayIcon,
	snowShowersNight: snowShowersNightIcon,
	snow: snowIcon,
	thunderRain: thunderRainIcon,
	thunderShowersDay: thunderShowersDayIcon,
	thunderShowersNight: thunderShowersNightIcon,
	thunder: thunderIcon,
	wind: windIcon,
};

// Passes weather condition and translates to match imported image variable naming convention by
// removing hyphen and capitalising next character
function translateWeatherIconFileName(weatherCondition) {
	let translatedWeatherIconFileName = '';
	for (let letter = 0; letter < weatherCondition.length; letter++) {
		if (weatherCondition[letter] === '-') {
			translatedWeatherIconFileName += weatherCondition.slice(letter + 1, letter + 2).toUpperCase();
			letter++;
		} else {
			translatedWeatherIconFileName += weatherCondition[letter];
		}
	}
	// Returns weather icon from object if it matches converted string
	for (let icon in weatherIcons) {
		if (icon === translatedWeatherIconFileName) {
			return weatherIcons[icon];
		}
	}
}

export { translateWeatherIconFileName };
