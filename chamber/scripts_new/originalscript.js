

// Dark/Light Mode Toggle
const toggle = document.querySelector('.theme-toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Display Current Date and Time
const updateDateTime = () => {
  const now = new Date();
  const dateTimeEl = document.getElementById('last-updated');
  if (dateTimeEl) {
    dateTimeEl.textContent = `Last updated: ${now.toLocaleString()}`;
  }
};

// Get and Display Weather by Geolocation
const fetchWeather = (lat, lon) => {
  const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const weatherEl = document.getElementById('weather-info');
      if (weatherEl) {
        const { name, main, weather } = data;
        weatherEl.textContent = `Weather in ${name}: ${main.temp}°C, ${weather[0].description}`;
      }
    })
    .catch(err => console.error('Weather fetch error:', err));
};

const initWeather = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      position => {
        fetchWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        console.error('Geolocation error:', error);
        const weatherEl = document.getElementById('weather-info');
        if (weatherEl) {
          weatherEl.textContent = 'Unable to fetch local weather.';
        }
      }
    );
  } else {
    console.warn('Geolocation not supported');
  }
};

// Initialize everything on page load
window.addEventListener('DOMContentLoaded', () => {
  updateDateTime();
  initWeather();
});
