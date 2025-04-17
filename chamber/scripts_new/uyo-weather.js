document.addEventListener('DOMContentLoaded', function () {
    const apiKey = '8c29bc14e5193a605c5a2d1af205e2aa';
    const weatherInfo = document.getElementById('weather-info');
    const weatherIcon = document.getElementById('weather-icon');
    const weatherDesc = document.getElementById('current-desc');
    const forecastList = document.getElementById('forecast-list');
  
    async function fetchWeather() {
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=Calabar,NG&units=metric&appid=${apiKey}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        updateWeatherInfo(data.list[0]);
        displayForecast(data.list);
      } catch (error) {
        weatherInfo.textContent = 'Weather data unavailable';
        console.error('Error fetching weather data:', error);
      }
    }
  
    function updateWeatherInfo(currentWeather) {
      const { temp, humidity } = currentWeather.main;
      const { description, icon } = currentWeather.weather[0];
      const date = new Date(currentWeather.dt * 1000);
  
      weatherInfo.innerHTML = `
        <strong>${temp.toFixed(1)}°C</strong><br>
        ${description}<br>
        Humidity: ${humidity}%<br>
        Date: ${date.toDateString()} ${date.toLocaleTimeString()}
      `;
      weatherIcon.src = `https://openweathermap.org/img/wn/${icon}.png`;
      weatherIcon.alt = description;
      weatherDesc.textContent = 'Current Weather';
    }
  
    function displayForecast(forecast) {
      const daily = {};
  
      forecast.forEach(item => {
        const date = new Date(item.dt * 1000);
        const day = date.toLocaleDateString(undefined, { weekday: 'long' });
  
        if (!daily[day]) {
          daily[day] = [];
        }
  
        daily[day].push(item);
      });
  
      const today = new Date().toLocaleDateString(undefined, { weekday: 'long' });
      const upcomingDays = Object.keys(daily).filter(day => day !== today).slice(0, 3);
  
      forecastList.innerHTML = '';
  
      upcomingDays.forEach(day => {
        const dayData = daily[day];
        const avgTemp = dayData.reduce((acc, val) => acc + val.main.temp, 0) / dayData.length;
        const description = dayData[0].weather[0].description;
  
        const li = document.createElement('li');
        li.innerHTML = `<strong>${day}</strong>: ${avgTemp.toFixed(1)}°C - ${description}`;
        forecastList.appendChild(li);
      });
    }
  
    fetchWeather();
  });
  