//! What is logged out

var string1 = 'Tampa';
var string2 = string1; //only time we set string2 is right here.

string1 = 'Venice';
console.log(string2); //tampa
 
 //strings are passed by value
////////////////////////////////
 
 
var person1 = {
  name: 'Alex',
  age: 30
};
 
var person2 = person1; //person1 and person2 are both referencing the same object
 
person2.name = 'Kyle';
 //objects passed by reference
console.log(person1); //name: kyle