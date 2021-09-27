//!What will be logged out? 

var x = 10;
 
function y() {
    x = 100;
    return;
    function x() {}// no code ever runs after a return statement.
}
 
y();
 
console.log(x); //10

//under the hood: 
var x = 10;
 
function y() {
  function x() {} //whole function being hoisted because it is written as a function declaration, so x is never reassigned to be a function
  x = 100;
    return;
}
 
y();
 
console.log(x);