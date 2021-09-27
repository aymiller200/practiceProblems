/* 
! WHAT DOES USING 'strict mode' do to your code? 
    *Enfore stricter parsing and error handling in your code
    *ENABLES US TO FAIL FAST AND FAIL LOULDLY
    * Allows you to place a program or a function in what's called a strict operating process.

! What are the benefits of using strict mode?
    *Prevents use of glabal variables (city = 'London', variable is defined without using var, let or const keywords ie, it is a global variable)
    * Makes debugging easier
    * Code errors that would otherwise have been ignored or would have failed silently will now generate errors or throw exceptions. This alerts you sooner to problems in your code and directs you quickly to their probable source.
    * With strict mode you cannot execute the eval function outside of the eval function block.
    * Stops you from using words that are reserved for future versions of javascript
    * ALL PARAMETERS OF A FUNCTION MUST BE UNIQUE
*/

let abc = 123
abd ='you and me' //In NON-strict mode we can use any variable even if it's hasn't been defined
console.log(abc)

const logName = () => { 
  'use strict'
  let first = 'Ayanna'
  firsts = 'Blanche'//In strict mode we can't use variables that have not been declared with var first.
  console.log(first)
}

logName()

console.log(eval('2 + 2'))

//* ALL PARAMETERS OF A FUNCTION MUST BE UNIQUE
'use strict'
function myFunc(a, a, b) {
    console.log(a, a, b)
}

myFunc(1, 2, 3) //Syntax Error: Duplicate parameter name not allowed in this context
//without strict mode
function myFunc(a, a, b) {
  console.log(a, a, b)
}

myFunc(1, 2, 3) //2, 2, 3: we get two twos logged out because javascript is assuming that our second a parameter is overriding our first a parameter which could get pretty confusing down the line if we do not get any errors thrown.

//* ERROR IF WE TRY AND DELETE ANY PROPERTIES THAT ARE NOT DELETEABLE

'use strict'

delete Object.prototype //trying to delete the prototype property of the Object constructor that is built into javascript.

//Without use strict we get no error thrown, just the value false.

