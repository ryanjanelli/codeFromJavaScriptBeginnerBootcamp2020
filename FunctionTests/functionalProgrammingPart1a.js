var weather = [72, 84, 34, 56, 92, 24, 47, 85, 72, 54];


// more efficient code using the filter method
var goOutside = weather.filter(function(temp) {
    return temp > 70;
})
console.log(weather);
console.log(goOutside);