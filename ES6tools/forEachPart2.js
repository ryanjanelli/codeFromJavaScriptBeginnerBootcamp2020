// testing in the lab

var colorArray = [
    {color: 'red'}, {color: 'orange'}, {color: 'yellow'}
];

// using a for loop, print each color


for (i = 0; i < colorArray.length; i++) {
    console.log(`i value: ${i} | Color Name: ${colorArray[i].color}`);
}


// using the forEach method, print each color


colorArray.forEach(function(item, index) {
    console.log(`i value: ${index} | Color Name: ${item.color}`)
 })

