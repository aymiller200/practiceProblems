/* 
!What is an IIFE and why are they used? 

!Code out an example IIFE that functions properly.
*/

//!MY ANSWER:
/*
*1st:
    * IIFE stands for Immediately Invoked Function Expression. 
    * IIFEs are very useful because they don't pollute the global object, and they are a simple way to isolate variables declarations.
    * JavaScript function that runs as soon as it is defined. ... It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts: The first is the anonymous function with lexical scope enclosed within the Grouping Operator () 
    * If for example we had two javascript files in separate script tags in our html file, and they both had the same variable initialized with different values. We wouldn't those variables to leak out into our applications global scope, so we use IIFEs to contain them, keep those values separate for our application doesn't break.
*/

//*2nd:

(function f(num) {
    return ((num > 1) ? num * (num - 1) : num)
})(40) //1560

//!HIS ANSWER: 
/* 
* IIFE: Immediately invoked function expression
    -A function that is executed right after creation, does not wait to be called
    -Main reason to use an IIFE is to preserve a private scope within your function
    -Inside of js code you want to make sure you aren't overwriting any global variables. 
*/

//!EX: 
  (function doubleNumber(num) {
    return num * 2
  })(10) //<- Immediately invokes
