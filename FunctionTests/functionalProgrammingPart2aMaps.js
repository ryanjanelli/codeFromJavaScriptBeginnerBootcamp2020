// an array of the forecast containg objects that contain day, sun and humidity
var forecast = [
    {day: 'Monday', sun: true, humidity: 10},
    {day: 'Tuesday', sun: false, humidity: 100},
    {day: 'Wednesday', sun: false, humidity: 100},
    {day: 'Thursday', sun: true, humidity: 25},
    {day: 'Friday', sun: false, humidity: 100},
    {day: 'Saturday', sun: true, humidity: 15},
    {day: 'Sunday', sun: false, humidity: 100}
];

console.log(forecast);

// creates an array of humidity for the week
var humid = forecast.map(function(moistureInAir) {
    return moistureInAir.humidity;
})

console.log(humid);