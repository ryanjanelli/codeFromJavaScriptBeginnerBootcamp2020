var myLanguages = function(lang1, lang2, lang3) {
    return 'My name is ' + this.name + ' and I know ' + lang1 + ', ' + lang2 + ', and ' + lang3;
};

var person1 = {
    name : 'Bobbert'
}

var person2 = {
    name : 'Samantha'
}

console.log(myLanguages.call(person1, 'English', 'Spanish', 'Italian'));
console.log(myLanguages.call(person2, 'English', 'Russian', 'Chinese'));