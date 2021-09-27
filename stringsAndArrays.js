//!What will be logged out? 
const data1 = 'Jordan Smith';
//            Array.prototype.filter 
const data2 = [].filter.call(data1, function(elem, index) {
  return index > 6;
});
 //use call method to set the this context that our filter method will be called on
 //function takes in the current element and current index as parameters, like all filter function do
 //inside of the funciton on our filter method, we simply need to return a true or false value for each element. 
 //if that function returns true then that element is placed into a new array which we have stored as the variable data2
 //we should expect all the characters in our data1 string that have an index greater than six to be passed into our data2 array.
console.log(data2); // ['S', 'm', 'i', 't', 'h']

//!CANNOT USE ALL ARRAY METHODS ON STRINGS. 
//!CAN ONLY USE READ ONLY METHODS ON STRINGS: filter, forEach, map, some, every, etc. CANNOT: Push, pop, splice, shift, reverse