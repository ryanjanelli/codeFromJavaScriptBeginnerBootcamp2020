// using let statements

// global variable
var a = 2;

function multiplication(x) {
    // b defined within the multiplication function
    let b = 3;
    if (x > 1) {
        // assign b a new value within the local scope of the if statement code block
        // does not fracture the temporal dead zone as it does not apply
        let b = 4;
        console.log(x * b);
    }
    // cannot access the new value of b within the if statement code block
    console.log(x * b);
}


multiplication(a);