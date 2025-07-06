let inputCity = document.getElementById('city_input');
let searchBtn = document.getElementById('searchBtn');
let locationBtn = document.getElementById('locationBtn');
let api_key = 'b448b76a8ec8420c31ad3c68ca6fa365';
let currentWeatherCard = document.querySelectorAll('.weather-left .card')[0];
let fiveDaysForecastCard = document.querySelector('.day-forecast')
let aqiCard = document.querySelectorAll('.highlights .card')[0];
let sunriseCard = document.querySelectorAll('.highlights .card')[1]; // <-- FIXED
let aqiList = ['Good', 'Fair', 'Moderate', 'Poor', 'Very Poor']
let humidityVal = document.getElementById('humidityVal');
let pressureVal = document.getElementById('PressureVal');
let visibilityVal = document.getElementById('visibilityVal');
let windspeedVal = document.getElementById('windspeedVal');
let feelslikeVal = document.getElementById('feelslikeVal');
let hourlyForecastCard = document.querySelector('.hourly-forecast')


function getWeatherDetails(name, lat, lon, country, state){
    let FORECAST_API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api_key}`
    let WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`
    let AIR_POLLUTION_API_URL = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${api_key}`,
    days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thrusday',
        'Friday',
        'Saturday',
    ],
    Months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ];

    fetch(AIR_POLLUTION_API_URL).then(res =>res.json()).then(data =>{
        let {co, no, no2, o3, so2, pm2_5,nh3} = data.list[0].components;
       aqiCard.innerHTML = ` <div class="card-head">
              <p>Air Quality Index</p>
              <p class="air-index aqi-${data.list[0].main.aqi}"> ${aqiList[data.list[0].main.aqi - 1]}</p>
            </div>
            <div class="air-indices">
              <i class='bx  bx-wind'></i>
              <div class="item">
                <p>PM2.5</p>
                <h2>${pm2_5}</h2>
              </div>
              <div class="item">
                <p>SO2</p>
                <h2>${so2}</h2>
              </div>
              <div class="item">
                <p>CO</p>
                <h2>${co}</h2>
              </div>
              <div class="item">
                <p>NO</p>
                <h2>${no}</h2>
              </div>
              <div class="item">
                <p>NO2</p>
                <h2>${no2}</h2>
              </div>
              <div class="item">
                <p>NH3</p>
                <h2>${nh3}</h2>
              </div>
              <div class="item">
                <p>O3</p>
                <h2>${o3}</h2>
              </div>

            </div>`
    }).catch(()=>{
        alert('Failed to fetch Air Quality Index')
    })

    fetch(WEATHER_API_URL)
  .then(res => {
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    return res.json();
  })
  .then(data => {
    if (data.cod && data.cod !== 200) throw new Error(`API error: ${data.message}`);
    let date = new Date();
        currentWeatherCard.innerHTML = `<div class="current-weather">
            <div class="details"></div>
            <p>Now</p <h2>${(data.main.temp - 273.15).toFixed(2)}&deg;C</h2>
            <p>${data.weather[0].description}</p>
          </div>
          <div class="weather-icon">
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
          </div>
          <hr>
          <div class="card-footer">
            <p><i class='bx  bx-calendar-week'></i> ${days[date.getDay()]}, ${date.getDate()}, ${Months[date.getMonth()]} ${date.getFullYear()}</p>
            <p><i class='bx  bx-location'></i>${name},  ${country}</p>
          </div>`
          let {sunrise, sunset } = data.sys;
          let { timezone } = data;

          // Convert seconds to milliseconds
          let sRiseTime = moment.unix(sunrise).utcOffset(timezone / 60).format('hh:mm A');
          let sSetTime = moment.unix(sunset).utcOffset(timezone / 60).format('hh:mm A');

          // Now use sRiseTime and sSetTime in your UI
          sunriseCard.innerHTML =` <div class="card-head">
              <p>Sunrise-Sunset </p>
            </div>
            <div class="sunrise-sunset">
            <div class="item">
              <div class="icon">
                <i class='bx  bx-sun-rise'  ></i> 
              </div>
              <div>
                <p>Sunrise</p>
                <h2>${sRiseTime}</h2>
              </div>
            </div>
            <div class="item">
              <div class="icon">
                <i class='bx  bx-sun-set'  ></i> 
              </div>
              <div>
                <p>Sunset</p>
                <h2>${sSetTime}</h2>
              </div>
            </div>
            </div>`

            humidityVal.textContent = data.main.humidity;
pressureVal.textContent = data.main.pressure;
visibilityVal.textContent = (data.visibility / 1000).toFixed(1); // convert to km
windspeedVal.textContent = data.wind.speed;
feelslikeVal.textContent = (data.main.feels_like - 273.15).toFixed(1); // convert to °C

    }).catch(() =>{
        alert("failed to fetch current weather")
    })

    console.log('Fetching from:', FORECAST_API_URL);

    fetch(FORECAST_API_URL)
    .then(res => {
        if (!res.ok) {
            // If response is not OK, throw error with status
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
    })
    .then(data => {
        if (data.cod && data.cod !== "200") {
            // If API returns an error code, show the message
            throw new Error(`API error: ${data.message}`);
        }
        // if (!data.list) {
        //     alert('Weather forecast data not available.');
        //     return;
        // }
        hourlyForecastCard.innerHTML = '';
        for (let i = 0; i <= 7; i++) {
            let hrForecastDate = new Date(data.list[i].dt_txt);
            let hr = hrForecastDate.getHours();
            let a = 'PM';
            if(hr < 12) a = 'AM';
            if(hr == 0) hr = 12;
            if(hr > 12) hr = hr - 12;
            hourlyForecastCard.innerHTML += `
                <div class="card">
                    <p>${hr} ${a}</p>
                    <img src="https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}.png">
                    <p>${(data.list[i].main.temp - 273.15).toFixed(2)}&deg;C</p>
                </div>
            `
        }
        let uniqueForecastDays = [];
        let fiveDaysForecast = data.list.filter(forecast => {
            let forecastDate = new Date(forecast.dt_txt).getDate();
            if(!uniqueForecastDays.includes(forecastDate)){
                return uniqueForecastDays.push(forecastDate)
            }
        });
        fiveDaysForecastCard.innerHTML = '';
        for(let i = 1; i < fiveDaysForecast.length; i++) {
            let forecastDate = new Date(fiveDaysForecast[i].dt_txt);
            fiveDaysForecastCard.innerHTML += `
            <div class="forecast-item">
              <div class="icon-wrapper">
                <img src="https://openweathermap.org/img/wn/${fiveDaysForecast[i].weather[0].icon}.png" alt="">
                <span>${(fiveDaysForecast[i].main.temp - 273.15).toFixed(2)}&deg;C</span>
              </div>
              <p>${forecastDate.getDate()} ${Months[forecastDate.getMonth()]}</p>
              <p>${days[forecastDate.getDay()]}</p>
            </div>`;
       }
    })
    .catch((err) => {
        console.error('Fetch error:', err);
        alert('Failed to fetch weather forecast: ' + err.message);
    });
}

function getCityCoordinates(){
    let cityName = inputCity.value.trim();
    inputCity.value = '';
    if(!cityName) return;
    let GEOCODING_API_URL_ = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${api_key}`;
    fetch(GEOCODING_API_URL_).then(res => res.json()).then(data =>{
        let {name, lat, lon, country, state} = data[0];
        getWeatherDetails(name, lat, lon, country, state);
    }).catch(()=>{
        alert(`Failed to fetch coordinates of ${cityName}`)
    });
    
}

function getUserCoordinates(){
    navigator.geolocation.getCurrentPosition(postion =>{
        let {latitude, longitude} = postion.coords;
        let REVERSE_GEOCODING_URL = `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${api_key}`

        fetch(REVERSE_GEOCODING_URL).then(res => res.json()).then(data =>{
        let {name, country, state} = data[0];
        getWeatherDetails(name, latitude, longitude, country, state);
        }).catch(()=>{
            alert('Failed to fetch user coordinates')
        })
    
    }, error => {
        if(error.code === error.PERMISSION_DENIED){
            alert('Geolocation permission denied. please reset location permission to grant access again');
        }
    })

}

searchBtn.addEventListener('click', getCityCoordinates);

locationBtn.addEventListener('click', getUserCoordinates);