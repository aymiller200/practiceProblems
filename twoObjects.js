//! What is logged out, true or false

const user1 = {
  name: 'Jordan',
  age: 28,
};
 
const user2 = {
  name: 'Jordan',
  age: 28,
};
 
console.log(user1 == user2); //false
console.log(user1 === user2); //false

/* 
* Two different objects are never equal to eachother in javascript. 

    *In js, we pass objects by reference and never by value. 
    *Both of these variables are referencing different objects in memory
*/

//If we did this these two statements would return true:
const user1 = {
  name: 'Jordan',
  age: 28,
};
 
const user2 = user1
 
console.log(user1 == user2); 
console.log(user1 === user2); 

//Deterime if two objects are equal to eachother in regards to properties and values

const user1 = {
  name: 'Jordan',
  age: 28,
};
 
const user2 = {
  name: 'Jordan',
  age: 28,
};
 
console.log(user1 == user2); //false
console.log(JSON.stringify(user1) === JSON.stringify(user2)); //true, strings are passed by value. Arrays would work the same 