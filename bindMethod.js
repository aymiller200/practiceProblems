/* 
!bind method

!Describe how it works
    *Part of the function object. 
    *Used to define what this is going to be at the time we define the function, not when we call it like call and apply. 
    *Function only wroks with function expression, must be associated with a variable
    *Allows you to bind this context to a function to a particular object
!Explain the parameters that it takes
    * the parameters that bind takes is what we want the this keyword to point to
!Code out an example of how bind() is used
*/

let a = function(){
  console.log(this)
}.bind(1)

a()

let b = {
  func: a
}
b.func()

let obj = {
  checkThis: function (){

   let checkOther = function() {
     console.log(this)
   }.bind(this)

   checkOther()
  }
}

obj.checkThis()

this.distance = 10000;
const roadTrip1 = {
  distance: 3000,
  getDistance: function(unit, caption) {
    return this.distance + unit + caption;
  }
};
 
const roadTrip2 = {
  distance: 5000
};
 
const getTripDistance = roadTrip1.getDistance.bind(roadTrip2, 'km');
 
getTripDistance(' in total');