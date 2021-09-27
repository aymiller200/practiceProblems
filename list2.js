/* 
!WHAT WILL LIST2 CONTAIN?
* In javascript, when we assign a variable to a piece of data we are always either passing that data by value or passing that data by reference.

*By Value: 
    -If the data we are passing is a primitive data type, or has no properties such as a string or a number then the data is always passed by value. 
    - When you a passing data as a value to a variable you are making that variable equal to the value of that data.
*By Reference: 
    -If the data type that we are passing is an object(including arrays), then that data is being passed by reference
    -In our code we are setting list1 equal to an array (being passed by reference because objects and arrays are passed by reference in js). Setting list2 = list1. List2 is being set to the same array list1 is being set to. LIST1 AND LIST2 ARE BOTH REFERENCING THE SAME UNDERLYING ARRAY. When we add 3 more elements to list1, it adds those elements to list2 because list2 is referencing the same exact array. 
    !LIST1 AND LIST2 ARE BOTH POINTING THEMSELVES TO THE SAME PIECE OF DATA
    
    But what about this? 
      const list1 = [1, 2, 3, 4, 5]
      const list2 = list1
      list1 = [10, 20, 30]

      - in this case list1 would be referencing this new array, but list2 would still be referencing the old array because that is what it was set equal to initially.
      -If we were to log out these two arrays at this point, list1 would be the new array, and list2 would be the old array.

  !CHANGING THE VALUE OF A VARIABLE NEVER CHANGES THE UNDERLYING OBJECT, IT SIMPLY POINTS THE VARIABLE AT A NEW OBJECT/ARRAY/STRING/NUMBER.
  !CHANGING A PROPERTY ON AN OBJECT OR AN ARRAY DOES CHANGE THE UNDERLYING OBJECT, SO ANY VARIABLES REFERENCING THAT UNDERLYING OBJECT WILL REFLECT THE CHANGE.

*/

const list1 = [1, 2, 3, 4, 5]
const list2 = list1; 

list1.push(6, 7, 8)

console.log(list2)// [1, 2, 3, 4, 5, 6, 7, 8]

//EX by value: 
const myNum = 10;//myNum is set equal to the value 10. 
const myString = 'hello world'//myString is set equal to the value 'hello world.
const myString2 = myString //variable myString2 is being set to the value of 'hello world'


//!FOLLOW UP QUESTION: 
//how can we set list2 equal to an array that has the same data as list1 without actually referencing the same array that list1 does? Should be able to update the array on list one without it affecting the data on list2. 

const list1 = [1, 2, 3, 4, 5]; 
const list2 = [...list1]

list1.push(6, 7, 8)
console.log(list2)
console.log(list1)

//SLICE: 
const list1 = [1, 2, 3, 4, 5]; 
const list2 = list1.slice()//using this method like this will COPY all of the elements in list1 and return them to us in a new array that we store in list2

list1.push(6, 7, 8)
console.log(list2)
console.log(list1)

//CONCAT
const list1 = [1, 2, 3, 4, 5]; 
const list2 = list1.concat([]); //concat our list1 with an empty array and return the newly created array to us

list1.push(6, 7, 8);
console.log(list2);
console.log(list1);