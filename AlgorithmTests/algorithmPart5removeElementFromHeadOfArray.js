// take an array, remove elements from the head and return the updated array

var leftoversInFridge = ['turkey', 'stuffing', 'gravy', 'cranberries', 'sweet potato pie', 'lasagna', 'cannolis']
var adultsInTheHouse = ['ryan', 'brianna', 'scott', 'kathy']

function removeFirstItems(array, x) {
    array.splice(0, x);
    return array;
}

console.log(removeFirstItems(leftoversInFridge, 4));
console.log(removeFirstItems(adultsInTheHouse, 2));