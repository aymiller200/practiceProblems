//! What will be logged out? 

console.log(900.9 === 300.3 * 3); //false because of the way they are binary encoded, some decimal numbers cannot be expressed perfectly accurately

//How to fix this problem: 
(300.3 * 3).toFixed(2) //number method that will return a given number fixed to a certian number of decimal places. toFixed turn number into a string so:
Number((300.3 * 3).toFixed(2))

//another way: 
(300.3 * 3).toPrecision(12)// total number of digits will not exceed the number argument passed in.
//also turns number into a string so: 
Number((300.3 * 3).toPrecision(2))

//final way: 
//Just don't use decimals at all: 
((300.3 * 10) * 3) / 10// multiplying our decimal by ten get get an intger, then we a deviding all of it by 10  to get the correct value. 

console.log(4 === 2 + 2) //true