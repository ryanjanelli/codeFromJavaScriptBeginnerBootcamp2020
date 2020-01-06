// practice using forEach method on arrays

var scaryCreatures = ['lions', 'tigers', 'bears'];

scaryCreatures.forEach(function(scaryCreature) {
    console.log(`Dorothy is afraid of ${scaryCreature}.`);
});

var guestInvites = ['Peter', 'Paul', 'Mary'];

guestInvites.forEach(function(guest, index) {
    console.log(`${index + 1}: ${guest}`);
});