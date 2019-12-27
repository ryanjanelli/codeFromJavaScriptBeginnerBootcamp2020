var myAge = 28;

//First two years of a cats life age faster.
var earlyYears = 2;

//Each year is equal to 25 years.
earlyYears *= 25;

//Subtracting 2 years from myAge to account for early years. 
//Label as laterYears
var laterYears = myAge - 2;

//Each later year is worth 4 years. 
laterYears *= 4;

//Add earlyYears and laterYears, now in cat years, to calculate my age.
var myAgeInCatYears = earlyYears + laterYears;

//My first name as a string
var myName = 'Ryan';

console.log('My name is ' + myName + '. I am ' + myAge + 
' years old in human years which is ' + myAgeInCatYears + 
' years old in cat years.')


