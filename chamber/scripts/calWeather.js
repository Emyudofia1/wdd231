document.addEventListener('DOMContentLoaded', function() {
    const weatherInfo = document.getElementById('weather-info');
    const weatherIcon = document.getElementById('weather-icon');
    const weatherDesc = document.querySelector('figcaption');
    const forecastList = document.getElementById('forecast-list');
    
    async function fetchWeather() {
        const api = '8c29bc14e5193a605c5a2d1af205e2aa';
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=Calabar,NG&units=metric&appid=${api}`;
    
        try {
            const response = await fetch(url);
            const data = await response.json();
            updateWeatherInfo(data.list[0]);
            displayForecast(data.list);
        } catch (error) {
            console.error('Error fetching weather data:', error);
            weatherInfo.textContent = 'Weather data unavailable';
        }
    }
    
    function updateWeatherInfo(currentWeather) {
        weatherInfo.textContent = `${currentWeather.main.temp} °C, ${currentWeather.weather[0].description}`;
        weatherIcon.src = `https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}.png`;
        weatherDesc.textContent = 'Current weather';
    }
    
    function processForecastData(forecast) {
        const dailyForecast = {};
        forecast.forEach(slot => {
            const date = new Date(slot.dt * 1000).toDateString();
            if (!dailyForecast[date]) {
                dailyForecast[date] = [];
            }
            dailyForecast[date].push(slot);
        });
    
        return Object.keys(dailyForecast).map(date => {
            const dayData = dailyForecast[date];
            const avgTemp = dayData.reduce((acc, cur) => acc + cur.main.temp, 0) / dayData.length;
            const descriptions = dayData.map(slot => slot.weather[0].description);
            const mostCommonDescription = descriptions.sort((a,b) =>
                descriptions.filter(v => v===a).length
                - descriptions.filter(v => v===b).length
            ).pop();
    
            return { date, avgTemp, weather: mostCommonDescription };
        }).slice(0, 3); // Limit to 3 days
    }
    
    function displayForecast(forecast) {
        const forecastData = processForecastData(forecast);
        forecastList.innerHTML = '';
        forecastData.forEach(day => {
            const entry = document.createElement('li');
            entry.textContent = `${day.date}: Avg Temp ${day.avgTemp.toFixed(1)} °C, Weather: ${day.weather}`;
            forecastList.appendChild(entry);
        });
    }
    
    fetchWeather();
    });