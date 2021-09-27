/* 
!WRITE A FUNCTION THAT KEEPS TRACK OF HOW MANY TIMES IT WAS CALLED AND RETURNS THAT NUMBER. 

!ALL FUNCTIONALITY SHOULD BE INSIDE OF THE FUNCTION - NONE OUTSIDE

*One of the best way to help a function keep track of itself is by using a closure, and creating instances of the function
*/

function myFunc() {
  let counter = 0

  return function(){
    counter++;
    return counter
  }
}

const instanceOne = myFunc(); 
const instanceTwo = myFunc()

console.log('One', instanceOne())
console.log('One', instanceOne())
console.log('One', instanceOne())
console.log('One', instanceOne())
console.log('Two', instanceTwo())
console.log('Two', instanceTwo())
console.log('Two', instanceTwo())



