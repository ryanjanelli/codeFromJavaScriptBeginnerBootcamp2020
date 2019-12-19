//enters a day and return the calories for that day
function inputCaloriesByDay(day) {
    day = day.toLowerCase();
    switch (day) {
        case 'monday':
            return 2500;
            break;
        case 'tuesday':
            return 2000;
            break;
        case 'wednesday':
            return 2400;
            break;
        case 'thursday':
            return 1900;
            break;
        case 'friday':
            return 3000;
            break;
        case 'saturday':
            return 2000;
            break;
        case 'sunday':
            return 2200;
            break;
        default:
            console.log ('Try entering a real day');
    }
}

//adds all calories together and returns the sum
function getTotalCalories() {
    return inputCaloriesByDay('monday') +
    inputCaloriesByDay('tuesday') +
    inputCaloriesByDay('wednesday') +
    inputCaloriesByDay('thursday') +
    inputCaloriesByDay('friday') +
    inputCaloriesByDay('saturday') +
    inputCaloriesByDay('sunday');
}

//takes recommended calloric intake and calculates it for the week
function getIdealCalories() {
    var idealDailyCalories = 2000;
    return idealDailyCalories * 7;
}

//determines if you are under or over your calories for the day
function calculateHealthPlan() {
    var actualCalories = getTotalCalories();
    var idealCalories = getIdealCalories();
    if (actualCalories < idealCalories) {
        return 'Time for seconds!';
    }
    if (actualCalories > idealCalories) {
        return 'You\'re fat. Get to the gym.';
    }
    else {
        return 'You know your body. Calories right on the money';
    }
}

calculateHealthPlan();