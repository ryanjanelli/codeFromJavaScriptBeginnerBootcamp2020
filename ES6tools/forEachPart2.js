// testing in the lab

var colorArray = [
    {color: 'red'}, {color: 'orange'}, {color: 'yellow'}
];

// using a for loop, print each color

var displayColors1 = function(array) {
    for (i = 0; i < array.length; i++) {
        console.log(`i value: ${i} | Color Name: ${array[i].color}`);
    }
};

displayColors1(colorArray);

// using the forEach method, print each color

var displayColors2  = function(array) {
    array.forEach(function(item, index) {
        console.log(`i value: ${index} | Color Name: ${item.color}`)
    })
}

displayColors2(colorArray);
