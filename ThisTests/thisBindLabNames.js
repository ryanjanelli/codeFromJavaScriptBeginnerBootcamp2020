let person1 = {
    name: 'Alex'
};
let person2 = {
    name: 'Alexis'
}
function namer() {
    return this.name;
}
namer();

console.log(namer.bind(person1)());
console.log(namer.bind(person2)());