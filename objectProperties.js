//!What will be logged out: 
const a = {};
const b = { name: 'b' };
const c = { name: 'c' };
 
a[b] = 200;
a[c] = 400;
 
console.log(a[b]); //400

/* 
* define three different objects
    * a is empty object, 
    * b object with name property set to string 'b'
    * c object with name property set to string 'c'

*Next we set a property of b on object a with a value of 200. 
*JS knows that only strings are allowed for properties on objects, so when we try to place our b object as a property of the a object, JS coerces b object into a string specifically '[object Object]' placed on a object. 
*Same thing with the c object. 
*we get 400 returned because the b object is getting converted to the string '[object Object]' and that property was most recently set to 400. 
*only strings can be properties on objects.
*/