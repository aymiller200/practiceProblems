/* 
!WHAT IS LOGGED OUT FOR EACH CONSOLE.LOG STATEMENT?
*/

console.log(typeof null); //object
console.log(typeof undefined); //undefined
console.log(typeof {}); //object
console.log(typeof []); //object

/* 
To find out if something is an array or not we can use isArray() method from the array prototype. 
*/

console.log(Array.isArray([]))

//Another way is use instanceOf.
console.log([] instanceof Array)