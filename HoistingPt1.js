/* 
!DESCRIBE WHAT VARIABLE AND FUNCTION HOISTING IS AND HOW IT WORKS. 
  *VARIABLES AND FUNCTIONS ARE HOISTED TO THE TOP OF THE SCOPE THAT THEY ARE DECLARED IN, WHETHER THAT BE THE GLOBAL SCOPE, FUNCTION SCOPE, OR (WITH LET AND CONST) THE BLOCK SCOPE.

  * Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).

  *Technically, var , let and const are hoisted. var is declared and initialized during hoisting. let and const are only declared during hoisting, not initialized. Accessing uninitialized variables result in ReferenceError.

  *The javascript interpreter looks ahead in the code to find all of the variables and functions declarations and then hoists those declarations to the top of the file.
*/


console.log(hello)
var hello = 'Good Day!'
//what this is saying is this: 
var hello;  //declared and initialized as undefined
console.log(hello)
hello = 'Good day!'//reinitialized as 'Good day!'

let goodbye; 
console.log(goodbye) //no error because we declared and initialized it as undefined.
goodbye = 'Farewell!'

console.log(greeting) //ReferenceError: Cannot access 'greeting' before initialization
let greeting = 'Salutations'

//*Same deal for functions: 


function foo(){
    console.log(a)
    var a = 1
}
foo()

//what is really going on: 
function foo(){
  var a; 
  console.log(a)
  a = 1
}

foo()

//Calling a function before it is declared: 
//*Javascript is able to call the function moo before it sees the function moo because javascript performs hoisting on functions. So it takes the function declaration and moves it to the highest part of the scope it can find.
moo()

function moo(){
  console.log('MOOooo')
}

//THIS DOES NOT WORK WITH ARROW FUNCTIONS OR ANONYMOUS FUNCTIONS: 

mooTwo() //ReferenceError: Cannot access 'mooTwo' before initialization
let mooTwo = () => {
  console.log('I am also mooing')
}

//what is really going on: 
let mooTwo; 
mooTwo()
mooTwo = () => {
  console.log('I am also mooing')
}

hello() //Cannot access 'hello' before initialization
let hello = function(){
    console.log('hi')

}

//------------------------------//
//!FUNCTION EXPRESSION: 
//    *A function declared with the var, let, or const keyword is called a function expression
const hello = function() {
  console.log('greetings')
}

hello()

//!FUNCTION DECLARATION: 
//    *A function declared without the var, let, or const keywords is known as a function declaration. 
function hello() {
  console.log('greetings')
}

hello()

//!DIFFERENCE BETWEEN FUNCTION DECLARATION AND EXPRESSION: 
    //* They are hoisted differently. 
    //*In a function declaration, that whole declaration, including it's definition is hoisted to the top of the file/scope.



