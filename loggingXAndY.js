/* 
!What is value of x when logged out?
error
!What is vlaue of y when logged out?
200
*/

(function() {
  var x = y = 200; 
})()//this whole function runs instantly

console.log('y:', y) //200
console.log('x:', x) //Reference Error: x is not defined

//* x: 
// - We get an error because x is defined within the scope of our IIFE, therefore we cannot access our variable x outside of the IFFE

//*y: 
//this is what is happening under the hood: 
(function() {
  //var x = y = 200
  y = 200 //<- a global variable because y is defined without let, const, or var.
  var x = y //<- and then we are saying variable x = y with the var keyword
})