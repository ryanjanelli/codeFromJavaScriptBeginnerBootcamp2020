//Temperature in kelvin. Today it is 301.
var kelvinTemp = 301;

//Temperature in celsius. From kelvin to celsius substract 273.15.
var celsiusTemp = kelvinTemp - 273.15;

//Temperature in fahrenheit. From celsius to fahrenheit multiply by (9/5) and add 32.
var fahrenheitTemp = celsiusTemp * (9/5) + 32;

//Remove the decimal places using the floor() method. Assign rounded value to fahrenheitTemp.
fahrenheitTemp = Math.floor(fahrenheitTemp);

//Use string concatenation to leave a message.
//"The temperature is 'fahrenheit' degrees Fahrenheit."
console.log('The temperature is ' + fahrenheitTemp + ' degrees Fahrenheit.')