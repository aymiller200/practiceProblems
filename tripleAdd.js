/* 
!WRITE A FUNCTION CALLED TRIPLE ADD THAT IS INVOKED LIKE THIS: 
    * tripleAdd(10)(20)(30) <-returns total of all three numbers.
*/


function tripleAdd(num1){
  return function(num2){
    return function(num3){
      return num1 + num2 + num3
    }
  }
}
tripleAdd(10)(20)(30)

const tripleAdd = (num1) => {
  return (num2) => {
    return (num3) => {
      return num1 + num2 + num3
    }
  }
}

console.log(tripleAdd(10)(20)(30))

const tripleAdd = (num1) => (num2) => (num3) => num1 + num2 + num3

console.log(tripleAdd(10)(20)(30))
/* 
!NOTES:
  * We are not invoking the triple add function three times, but instead invoking the triple add function one time. Then we are invoking whatever is returned to us in the tripleAdd function.

  *If we are invoking what is returned to us from this function then that must mean that another function is being returned to us, because the only thing you can invoke in js is a function. 

  *Then we are invoking a third time which means whatever is returned from out second function must also be a function as well before we can only invoke functions.

  *Finally after we invoke a third time we get our answer. 

  *In simpilest terms: In order to make our triple add function work properly it must return a function, that returns another function that returns our answer.

  *The tripleAdd function is known as what is called a curried function. Currying a function: a technique of translating one function that takes multiple arguments into a sequence of functions that each take in on or multiple arguments.

*/

//*EX
//* This is a single function that takes in multiple arguments and it returns to us the total of those argumetns added together.
function tripleAdd1(num1, num2, num3) {
  return num1 + num2 + num3
}

tripleAdd1(10, 20, 30)

//!Our tripleAdd function is the curried function of our tripleAdd1 function

//*EX of currying with functions that take in multiple arguments: 
function quadrupleAdd(num1) {
  return function(num2) {
    return function(num3, num4){
      return num1 + num2 + num3 + num4;
    };
  };
}

quadrupleAdd(10)(20)(30, 40);