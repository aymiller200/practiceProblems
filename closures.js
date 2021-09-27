/* 
!WHAT IS A CLOSURE? 

!CODE OUT AN EXAMPLE CLOSURE
*/

//*1st: 
    //A closure is a function having access to the parent scope, even after the parent function has close or A closure is the combination of a function and the lexical environment within which that function was declared.
    //It makes it possible for a function to have "private" variables.
    //Closures are useful because they let you associate data (the lexical environment) with a function that operates on that data. This has obvious parallels to object-oriented programming, where objects allow you to associate data (the object's properties) with one or more methods.
    //In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

//*2nd: 
/* 
* There is a single lexical environment that is shared by the three functions: counter.increment, counter.decrement, and counter.value.
* The shared lexical environment is created in the body of an anonymous function, which is executed as soon as it has been defined (also known as an IIFE)
* The lexical environment contains two private items: a variable called privateCounter, and a function called changeBy
* You can't access either of these private members from outside the anonymous function. Instead, you can access them using the three public functions that are returned from the anonymous wrapper.
*Those three public functions are closures that share the same lexical environment. Thanks to JavaScript's lexical scoping, they each have access to the privateCounter variable and the changeBy function.

*/

    let counter = (function() {
      let privateCount = 0;
      function changeBy(val) {
        privateCount += val
      }

      return {
        increment: function() {
          changeBy(1)
        }, 
        decrement: function(){
          changeBy(-1);
        }, 
        value: function(){
          return privateCount
        }
      }
    }())

    console.log(counter.value())
    counter.increment()
    counter.increment()
    console.log(counter.value())
    counter.decrement()
    console.log(counter.value())
    console.log(counter.changeBy()) //error when accessing

    /*
    - A closure is an inner function that has access to the scope of an enclosing function
    -A closure has access to variables in 3 separate scopes: 
          1. Variables in its own scope (scope of the inner function)
          2. Variables in the scope of the outer function.
          3. Variables in the the global scope. 

        -Closure also has access to: 
          1. Its own parameters.
          2. Parameters of the outer function(s)
    */

  //EX: 
  const globalVar = 'global var';

  function outterFunc(param1) {
    const variable1 = 'var one';

    //Closure
    function innerFunc(param2) {
      const variable2 = 'var two'; 
      
      console.log('global:', globalVar)
      console.log('var1:', variable1)
      console.log('var2:', variable2)
      console.log('param1:', param1)
      console.log('param2:', param2)
    }

    innerFunc('param one')
  }
  outterFunc('param two')