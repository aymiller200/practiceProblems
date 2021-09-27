/* 
!VARIABLE AND FUNCTION HOISTING: 
* var -> function scoped: 
      *global scope
      *function scope

* const, let -> block scoped: 
      *global scope
      *function scope
      *block scope: present whenever there is a block of code. Could be a for loop, if else, while loop, etc.
          * when we use const of let to declare a variable in this block scope, that variable declaration will only be hoisted to the top of that block it is in, and not hoisted to the top of the parent function or to the top of the global scope.
*/

//EX: 
  function getTotal() {
    let total = 0

    for(var i = 0; i < 10; i++) {
      let valueToAdd = i; //this is hoisted to the top of the for loop and not to the top of the entire function
      var multiplier = 2; //since var is function scoped and not block scoped it is hoisted to the top of the entire function.
      total += valueToAdd * multiplier;
    }

    return total
  }

  getTotal()

      //*How this function actually looks with hoisting
      function getTotal() {
        let total; 
        var multiplier;

        total = 0
    
        for(var i = 0; i < 10; i++) {
          let valueToAdd;
          
          valueToAdd = i;
          multiplier = 2; 
          total += valueToAdd * multiplier;
        }
    
        return total
      }
    
      getTotal()

//* VARIABLES WITH THE VAR KEYWORD ARE INITIALIZED AS UNDEFINED
//* KEYWORDS WITH LET OR CONST ARE NOT INITIALIZED UNTIL THEIR ACTUAL DECLARATION, SO THEY CAN CANNOT BE ACCESSED UNTIL THEY ARE ACTUALLY DECLARED.