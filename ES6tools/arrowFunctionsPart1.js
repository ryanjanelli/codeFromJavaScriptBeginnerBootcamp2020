// learning how to use fat arrow functions in es6

// function with single parameter

let twoForYou;
// if no parameter is required, the parenths are required
twoForYou = () => 2;

let cubed;
// parenths () are optional around x when using a single parameter
// no need for keywrod 'return' after fat arrow
// concise body, x is implicitly returned
cubed = x => x*x*x;
// if curly braces are used, 'return' keyword is required
// block body, x is explicitly returned
cubed = x => {return x*x*x;};

// CONSIDERED BEST PRACTICE to include parenths for uniformity
cubed = (x) => x*x*x;

let add;
// two or more parameters
add = (x, y, z) => x + y + z;