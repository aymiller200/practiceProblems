/* 
!SINGLY OR DOUBLY INVOKED FUNCTION THAT RETURNS TOTAL OF TWO NUMBERS

*arguments object is considered an array like object. 
    * it is similar to array because the properties are number like the index of an array are. 
    * but it does not have access to many of the useful methods on in that an array has, because it's an object.
*/

function getTotal() {
  //we want to use the slice method on our array like object so we call that method by saying Array.prototype.slice then, we can bind the context of the slice method to our arguments object by saying .call. now we have an actuall array of objects stored in our args variable.Slice works here, because arguments is ARRAY LIKE OBJECT.
  let args = Array.prototype.slice.call(arguments) //arguments keyword built into javascript language. Gives us access to whatever arguments are passed into our function. Do not need to define how many arguments or what arguments are passed into our function, because we have access to them with the arguments keyword.
  if(args.length === 2) {
    return args[0] + args[1]
  }else if (args.length === 1){
    return function(num2){
       return args[0] + num2
    }
  }
  console.log(arguments)
}

console.log(getTotal(10, 20))
//or doubly
console.log(getTotal(10)(20))