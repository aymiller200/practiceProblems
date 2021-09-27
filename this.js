//! WHAT IS THE THIS KEYWORD AND HOW IS IT USED: 
/* 
*The 'this' keyword refers to the object it belongs to, and the value of that object is determined by the calling context, NOT lexically.
*/

let house = {
  price: 100000,
  squareFeet: 2000,
  owner: 'Taylor',

  getPricePerSquareFoot: function () {
    return this.price / this.squareFeet;

  }
}

console.log(house.price);
console.log(house.getPricePerSquareFoot());


function test() {
  let cat = 'meow'
  console.log(this) //global object
  console.log(this.cat) //undefined because this is pointing to the global object.
}

test()

let animal = {
  dog: function () {
    console.log(this) //this point to animal object

    function feline() {
      console.log(this) //this points to global object because when we call feline below there isn't calling context.
    }

    feline()
  }
}

animal.dog()

/* 
  * These are different ways of locking down and stabilizing what the this keyword means when executing different functions. 
  
  *Call, bind, and apply is part of the basic function object (Prototype).
*/

//CALL:
/* 
* The call() method calls a function with a given this value and arguments provided individually.
* What that means, is that we can call any function, and explicitly specify what this should reference within the calling function.
*The main differences between bind() and call() is that the call() method:
          * does not make a copy of the function it is being called on.

*/

function alphabet(b, c, d) {
  console.log(this);
  console.log(b);
  console.log(c);
  console.log(d);
}
//first first parameter to the call function is whatever we what THIS to be in the function we are calling
alphabet.call(1, 2, 3, 4)

//*call() and apply() serve the exact same purpose. The only difference between how they work is that call() expects all parameters to be passed in individually, whereas apply() expects an array of all of our parameters. Example:

let pokemon = {
  firstname: 'Pika',
  lastname: 'Chu ',
  getPokeName: function () {
    let fullname = this.firstname + ' ' + this.lastname;
    return fullname;
  }
};

let pokemonName = function (snack, hobby) {
  console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
};

pokemonName.call(pokemon, 'sushi', 'algorithms'); // Pika Chu  loves sushi and algorithms
pokemonName.apply(pokemon, ['sushi', 'algorithms']); // Pika Chu  loves sushi and algorithms


//APPLY: 
//*normally you would use call unless the function takes in a variable number of parameters.
function numbers() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i]
  };
  return total
}

let bigArray = [23, 45, 65, 47, 23, 11, 2, 3, 4, 5, 6, 7, 8, 9, 18]
let x = numbers.apply(null, bigArray) //pass in every single parameter separately as an array.
console.log(x)


//BIND: 
let pokemon = {
  name: 'Pikachu',
  type: 'electric',
  getPokeInfo: function () {
    let info = `${this.name} is an ${this.type} pokemon`;
    return info
  }
};

let pokedex = function () {
  console.log(this.getPokeInfo())
}

let log = pokedex.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now

log()

/* 
* the JS engine is creating a new pokedex instance and binding pokemon as its this variable. It is important to understand that it copies the pokedex function.

*After creating a copy of the pokedex function it is able to call logP(), although it wasn’t on the pokemon object initially. It will now recognize its properties (Pikachu and electric) and its methods.
*/

//And the cool thing is, after we bind() a value we can use the function just like it was any other normal function. We could even update the function to accept parameters, and pass them like so:

let pokemon = {
  firstname: 'Pika',
  lastname: 'Chu ',
  getPokeName: function () {
    let fullname = this.firstname + ' ' + this.lastname;
    return fullname;
  }
};

let pokemonName = function (snack, hobby) {
  console.log(this.getPokeName() + 'I choose you!');
  console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
};

var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now

logPokemon('sushi', 'algorithms'); // Pika Chu  loves sushi and algorithms

