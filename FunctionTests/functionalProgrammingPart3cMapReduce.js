// members of a team
var digitalMediaServicesMembers = ['Kevin', 'Donna', 'Sean', 'Ryan', 'Mike', 'Kaycee']

// conver all to uppercase. As if SHOUTING.
var dmsShout = digitalMediaServicesMembers.map(function(names) {
    return names.toUpperCase();
})

// puts the whole team together with commas
var greetAll = dmsShout.reduce(function(a,b) {
    if (b != dmsShout[dmsShout.length - 1]) {
        return a + ', ' + b; }
    else { return a + ', and ' + b; }
})
console.log('HELLO ' + greetAll + '!!!');