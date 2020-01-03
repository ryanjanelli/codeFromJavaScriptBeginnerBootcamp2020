// create two arrays and then add them together
// use both es5 and es6 approach

let citrus = ['orange', 'lemon', 'lime'];
let berry = ['raspberry', 'blackberry', 'strawberry'];

// es5 method
let fruits1 = citrus.concat(berry);
console.log(fruits1);

// es6 method
let fruits2 = [...citrus,...berry];
console.log(fruits2);