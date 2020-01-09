// testing destructuring after watching fun fun function video about it
// destructuring allows you to break an object or array up into variables

let canine = {
    weight : 23,
    sound : 'woof'
}

let bigCat = {
    species : 'lion',
    weight : 90,
    sound : 'roar'
}

// v1
// makeSound = (options) => {
//     options.species = options.species || 'animal'
//     console.log(`The ${options.species} says ${options.sound}!`);
// }

// v2
// makeSound = (options) => {
//     let species = options.species || 'animal'
//     let sound = options.sound
//     console.log(`The ${species} says ${sound}!`);
// }

// v3
// makeSound = (options) => {
//     let {species, sound} = options
//     species = species || 'animal'
//     console.log(`The ${species} says ${sound}!`);
// }

// function that looks for an object with a species and sound properties
// if no species is specified, the string animal is used in its place
makeSound = ({ species = 'animal', sound }) => {
    console.log(`The ${species} says ${sound}!`);
}

makeSound(canine);
makeSound(bigCat);
makeSound('cat');
makeSound({ species : 'cat', sound : 'meow' });
makeSound({ sound : 'purr' });