//!What is logged out? 

var arr1 = [];
var arr2 = new Array(50);
var arr3 = new Array(1, 2, "three", 4, "five");
var arr4 = new Array([1, 2, 3, 4, 5]);
 
console.log('arr1: ', arr1); // []
console.log('arr2: ', arr2); // [<50 empty items>] array of length 50, but every element in the array is empty. That is how the array constructor method works if we pass in a single NUMBER of 0 or greater.
console.log('arr3: ', arr3); // [1, 2, 'three', 4, 'five']
console.log('arr4: ', arr4); // [ [1, 2, 3, 4, 5 ] ]