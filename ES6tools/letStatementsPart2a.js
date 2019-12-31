// using var statements

// global variable
var a = 2;

function multiplication(x) {
    // b defined within the multiplication function
    var b = 3;
    if (x > 1) {
        // assign b a new value within the multiplication function
        // this new value will be visible outside of the if statement code block    
        var b = 4;
        console.log(x * b);
    }
    console.log(x * b);
}

// both logs return the same value of x * b
multiplication(a);