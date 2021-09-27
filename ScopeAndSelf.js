/* 
!WHAT WILL BE LOGGED OUT INTO THE CONSOLE? 

!IF YOU ARE USING THE 'THIS' KEYWORD INSIDE OF NESTED FUNCTIONS, YOU ARE MORE THAN LIKELY GOING TO LOSE REFERENCE TO THAT OBJECT THAT YOU ARE INSIDE OF, AND YOUR THIS KEYWORD WILL END UP REFERENCING THE GLOBAL OBJECT

!The purpose of self is to store a reference to a certain scope or context that you will need to use later on.
*/

var myCar = {
  color: "Blue",
  logColor: function() {
      var self = this; //storing reference of the myCar object into the variable self. <- This is a very common practice in javascript to help solve scope and referencing issues that developers tend to come across.
      console.log("In logColor - this.color: " + this.color); //blue <- at the point that we are logging out this.color our this keyword is still referencing the myCar object.
      console.log("In logColor - self.color: " + self.color); //blue <- just set variable self to this keyword
      (function() {
          console.log("In IIFE - this.color: " + this.color); //undefined <- happening because we are now in the scope of new anonymous iife function. Because we are inside of this IIFE and it is note a method in the myCar object. This has lost reference to the myCar object and instead it is now referencing the globabl object.
          //THIS is undefined because it is referencing the globabl object, and we do not have a color property defined on out global scope.
          console.log("In IIFE - self.color: " + self.color); //blue <- stored reference of the myCar object object in the variable self.
      })();
  }
};

myCar.logColor();

//!IF we have this.color = 'red' on our globabl scope, that console log would print red because the console log inside of our iife is pointing to the global scope