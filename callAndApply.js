/* 
! DESCRIBE CALL() AND APPLY()
*/
//CAll: 
//* Gives us a different way of passing arguments into our function. 
//* Also gives us the ability to change the this context, which you cannot do if you call a function the normal way.
const car1 = {
  brand: 'Porsche', 
  getDescription: function(cost, year, color) {
    console.log(`This car is a ${this.brand}. The price is ${cost}. The year is ${year}. The color is ${color}`)
  }
}

const car2 = {
  brand: 'Lamborghini'
}
//this context call1 because getDescription is a method directly on car1 object.
car1.getDescription(80000, 2010, 'blue'); //<- how we normally call a function of a method that we have.

//with call: 
car1.getDescription.call(car2, 200000, 2013, 'yellow')
              //     car2 is what we want the this context to be.

//APPLY: 
//* When we use apply method we pass all the parameters for the function in as an array, instead of individually
const car1 = {
  brand: 'Porsche', 
  getDescription: function(cost, year, color) {
    console.log(`This car is a ${this.brand}. The price is ${cost}. The year is ${year}. The color is ${color}`)
  }
}

const car2 = {
  brand: 'Lamborghini'
}
const car3 = {
  brand: 'Ford'
}

//with apply:
car1.getDescription.apply(car3, [35000, 2012, 'black'])

car1.getDescription(80000, 2010, 'blue'); 
//with call: 
car1.getDescription.call(car2, 200000, 2013, 'yellow')



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
//first parameter to the call function is whatever we what THIS to be in the function we are calling
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
//* When we use apply method we pass all the parameters for the function in as an array, instead of individually
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
