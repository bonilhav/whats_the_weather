const current = $('.todaysWeather');
const forecast = $('.futureWeather');


$("#search").click(function(){
    event.preventDefault();
    let city = $('#search-city').val();
    getCurrentWeather(city);
    /* getFutureWeather(city); */
});

function getCurrentWeather(city) {
    let cityUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=7c86f0d48713fa92ff0fb20c045e6202`;

    $.get(cityUrl)
    .then(function(data) {
        console.log(data)
        let today = moment().format("MM/DD/YYYY");
        console.log(today)

        current.html(`
        <h2>${data.name} ${today} ${data.weather[0].icon}</h2> 
        <p>Temperature: ${data.main.temp}&#176;F</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} mph</p>
        `/* , returnUVI(response.coord) */)
        /* createHistory(response.name); */
        let lat = data.coord.lat;
        console.log(lat)
        let lon = data.coord.lon;
        console.log(lon)
    });
};

function returnUVI () {
    let uviUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=7c86f0d48713fa92ff0fb20c045e6202"

    $.get(uviUrl)
    .then(function(data) {
        console.log(data)
    })
};

/* function getFutureWeather(city) {
    let futureCityUrl = `api.openweathermap.org/data/2.5/forecast?q=${city}&appid=6f9d945ac816d5bdf19278fb1c1a99bc`;

    $.get(futureCityUrl)
    .then(function(data) {
        console.log(data)
        let date = moment().format("MM/DD/YYYY");
        console.log(date)

        forecast.html(`
        <h2>${data.name} ${date} ${data.weather[0].icon}</h2> 
        <p>Temperature: ${data.main.temp}&#176;F</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} mph</p>
        `)

    });
}; */

/* const citiesFromLocalStorage = JSON.parse(window.localStorage.getItem("cityHistory")) || [];



function createHistory (){

}; */


