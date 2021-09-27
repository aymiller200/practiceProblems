/* 
!DIFFERENCE BETWEEN == AND === :

* == : 
    * equality: 
          * only checks the euality of the values on the left and right hand side of the operator. 
          * Type Coercion 
          * Tests for abstract equality
          * Does NOT test for data type

* === :
    * strict equality: 
          * Checks for both type and vlaue equality
          * If both values on different sides of the operator are of different types, it will all be false.
          * Only if the values AND types are the same will it be true.
          * Better practice to use a strict equality operator.
          * tests for strict equality
          * Does check for data type
*/

0 == '0' //true <- Javascript is converting the number zero to a string with String(0), so we are actually comparing two strings of zero together. TYPE COERCION.

0 === '0' //false

false == 'false'//true
//this is actually sayinf this: 
false == Boolean('false') // --> Boolean('false') is actually true so this is saying false == true which is false.

/* 

*Comparing number & string: 
    *string is converted to a number
    *comparison is made

*Comparing boolean and non-boolean: 
    * non boolean is converted to a boolean
    * comparison is made

*Comparing object and primitive data-type: 
    * object is converted to primitive data-type
    * comparison is made


*/


