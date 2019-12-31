let number = {
    x: 24,
    y: 22
};

let count = function() {
    return this.x + this.y;
}

let boundCount = count.bind(number);

console.log(boundCount());