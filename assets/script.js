const current = $('.todaysWeather');
const forecast = $('.futureWeather');
const forecast1 = $('.futureWeather1');
const forecast2 = $('.futureWeather2');
const forecast3 = $('.futureWeather3');
const forecast4 = $('.futureWeather4');


$("#search").click(function () {
    event.preventDefault();
    let city = $('#search-city').val();
    getCurrentWeather(city);
    /*  getFutureWeather(lat,lon); */
});

function getCurrentWeather(city) {
    let cityUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=7c86f0d48713fa92ff0fb20c045e6202`;

    $.get(cityUrl)
        .then(function (data) {
            console.log(data)
            let today = moment().format("MM/DD/YYYY");
            console.log(today)

            let icon = data.weather[0].icon

            current.html(`
        <h2>${data.name} ${today} <img src="http://openweathermap.org/img/wn/${icon}@2x.png"/></h2> 
        <p>Temperature: ${data.main.temp}&#176;F</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} mph</p>
        `, returnUVI(data.coord.lat, data.coord.lon))
        /* createHistory(response.name) */;
            let lat = data.coord.lat;
            console.log(lat)
            let lon = data.coord.lon;
            console.log(lon)
            getFutureWeather(lat, lon);
        });
};

function returnUVI(lat, lon) {
    let uviUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=7c86f0d48713fa92ff0fb20c045e6202`

    $.get(uviUrl)
        .then(function (data) {
            console.log(data.daily)

            current.append(
                `<p>UVI: ${data.current.uvi} </p>`)
            console.log(data.current.uvi)
        })
};

function getFutureWeather(lat, lon) {
    let futureCityUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=hourly,minutely,alerts&appid=7c86f0d48713fa92ff0fb20c045e6202`

    $.get(futureCityUrl)
        .then(function (data) {
            console.log(data)

            for (let i = 1; i < data.daily.length; i++) {
                const element = new Date(data.daily[i].dt).toLocaleDateString()

                if (data.daily !== 0) {

            forecast.html(`
                <h3>${moment(data.daily[1].dt, "X").format("MM/DD/YYYY")}</h3> 
                <img class="futureIcon" src="http://openweathermap.org/img/wn/${data.daily[1].weather[0].icon}@2x.png"/>
                <p>Temperature: ${data.daily[1].temp.day}&#176;F</p>
                <p>Humidity: ${data.daily[1].humidity}%</p>
                <p>Wind Speed: ${data.daily[1].wind_speed} mph</p>`)

            forecast1.html(`
                <h3>${moment(data.daily[2].dt, "X").format("MM/DD/YYYY")}</h3> 
                <img class="futureIcon" src="http://openweathermap.org/img/wn/${data.daily[2].weather[0].icon}@2x.png"/>
                <p>Temperature: ${data.daily[2].temp.day}&#176;F</p>
                <p>Humidity: ${data.daily[2].humidity}%</p>
                <p>Wind Speed: ${data.daily[2].wind_speed} mph</p>`)

            forecast2.html(`
                <h3>${moment(data.daily[3].dt, "X").format("MM/DD/YYYY")}</h3> 
                <img class="futureIcon" src="http://openweathermap.org/img/wn/${data.daily[3].weather[0].icon}@2x.png"/>
                <p>Temperature: ${data.daily[3].temp.day}&#176;F</p>
                <p>Humidity: ${data.daily[3].humidity}%</p>
                <p>Wind Speed: ${data.daily[3].wind_speed} mph</p>`)
            
            forecast3.html(`
                <h3>${moment(data.daily[4].dt, "X").format("MM/DD/YYYY")}</h3> 
                <img class="futureIcon" src="http://openweathermap.org/img/wn/${data.daily[4].weather[0].icon}@2x.png"/>
                <p>Temperature: ${data.daily[4].temp.day}&#176;F</p>
                <p>Humidity: ${data.daily[4].humidity}%</p>
                <p>Wind Speed: ${data.daily[4].wind_speed} mph</p>`)

            forecast4.html(`
                <h3>${moment(data.daily[5].dt, "X").format("MM/DD/YYYY")}</h3> 
                <img class="futureIcon" src="http://openweathermap.org/img/wn/${data.daily[5].weather[0].icon}@2x.png"/>
                <p>Temperature: ${data.daily[5].temp.day}&#176;F</p>
                <p>Humidity: ${data.daily[5].humidity}%</p>
                <p>Wind Speed: ${data.daily[5].wind_speed} mph</p>`)
            }
            }
        });
};

/* const citiesFromLocalStorage = JSON.parse(window.localStorage.getItem("cityHistory")) || [];



function createHistory (){

}; */


