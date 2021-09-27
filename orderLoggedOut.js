/* 
!WHAT ORDER ARE NUMBERS (1, 2, 3, 4) LOGGED OUT IN
*/

function logNumbers() {
  console.log(1); //1st
  setTimeout(function(){console.log(2)}, 1000); //4th
  setTimeout(function(){console.log(3)}, 0); //3rd
  console.log(4); //2nd
}
 
logNumbers();

/* 
!Why are they logged out as 1, 4, 3, 2
    *1st console log is just a statement, not wrapped in a setTimeout function. 
    *2nd console log is 2, but it is wrapped in a one second timeout
    *3rd console log is wrapped in a 0ms delay timeout function, but in the console 3 is logged out after 4. 
        *the setTimeout still effects how long it takes that 3rd console log to run. 
        * this is because of the event loop in the browser. The event loop is a queue in which all events taking place in the browser are placed. These events can include click events, ajax events, callback functions, callbacks placed in a set timeout or set interval, etc.
        * All of these events are placed in the event loop queue and then processed in the order that they were placed in the queue. 
            * this means that our 3rd console.log is pushed into the event queue because it is placed inside of a callback function
    *While console log three is waiting, console log four runs instantely because it is not placed into the event loop. 
*/