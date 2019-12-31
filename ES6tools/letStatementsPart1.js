// use var and let to show how var is access globally and let is restricted when inside a code block

var self = {
    name : 'Ryan',
    languagesSpoken : 1
}

var languagePrimary = 'English';

if (self.languagesSpoken > 1) {
    var languageSecondary = 'Spanish';
}
// languageSecondary is readable in the global scope
console.log(self.name + ' speaks ' + languagePrimary + ' and ' + languageSecondary + '.');

if (self.languagesSpoken > 2) {
    let languageTertiary = 'Italian';
}
// languageTertiary is not readable in the global scope
 console.log('Ryan speaks ' + languagePrimary + ', ' + languageSecondary + ', and ' + languageTertiary + '.');