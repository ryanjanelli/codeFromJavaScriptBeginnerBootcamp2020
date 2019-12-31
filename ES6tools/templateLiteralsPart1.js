let sentence = `My name is Ryan
and I like to run`;
console.log(sentence);

var pizza = {
topping1 : 'mushrooms',
topping2 : 'peppers',
favoritePizza : function() { 
    return `My favorite pizza has ${this.topping1} and ${this.topping2}.`;
    }
}

console.log(pizza.favoritePizza());