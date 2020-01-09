// repeat a string 'n' number of times

// using a for loop
repeatString = (str, n) => {
    let repeat = '';
    for (let i = 1; i <= n; i++) {
        repeat += str;
    }
    return repeat;
}

console.log(repeatString('car', 4));
console.log(repeatString('Abracadabra', 2));
console.log(repeatString('noodle', -1));

// using a while loop
repeatString2 = (str, n) => {
    let repeat = '';
    while (n > 0) {
        repeat += str;
        n--;
    }
    return repeat;
}

console.log(repeatString2('noodle', 3));
console.log(repeatString2('please', 1));
console.log(repeatString2('never', -1));
