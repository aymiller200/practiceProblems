/* 
!WHAT WILL THE FUNCTION PRINT?
*/


var num = 50; 

//if these variables were defined with the let keyword, we would have gotten an error because LET AND CONST are only declared during hoisting, not initialized. Accessing uninitialized variables result in ReferenceError.
function logNumber() {
  console.log(num); //will print undefined because at the time we are logging out our num variable, our num variable is undefined.
  var num = 100; //this is function scoped, and the variable declaration is hoisted to the top of the function it is in.
  //If we delete this second num variable we get 50. This is because we are trying to log out the variable num, but there in no num variable present in our function scope. So, javascript then looks into the parent scope.
}

logNumber()

//the code is saying this: 
var num = 50

function logNumber() {
  var num; //being defined here
  console.log(num) //will print undefined
  num = 100
}

logNumber()

