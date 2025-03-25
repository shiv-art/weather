const API_KEY = 'YOUR_API_KEY_HERE';

const cityInput = document.querySelector('#city-input');
const form = document.querySelector('form');
const cityElement = document.querySelector('.city');
const countryElement = document.querySelector('.country');
const tempElement = document.querySelector('.temp');
const conditionElement = document.querySelector('.condition');

form.addEventListener('submit', event => {
    event.preventDefault();
    
    const city = cityInput.value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const { name } = data;
            const { country } = data.sys;
            const { temp } = data.main;
            const { description } = data.weather[0];

            cityElement.textContent = name;
            countryElement.textContent = country;
            tempElement.innerHTML = `${temp}°C`;
            conditionElement.textContent = description;

            cityInput.value = '';
        });
});
