/* 
!WHAT WILL BE ALERTED TO THE SCREEN WHEN BUTTON 5 IS CLICKED, AND WHY IS THIS DATA ALERTED?
*/

function createButtons() {
  for (var i = 1; i <= 5; i++) {
    var body = document.getElementsByTagName("BODY")[0];
    var button = document.createElement("BUTTON");
    button.innerHTML = 'Button ' + i;
    button.onclick = function() { //by the time this function runs, the loop has already completed
         alert('This is button ' + i);
         console.log(i)
    }
    body.appendChild(button);
  }
}

createButtons();

//* SOLUTION:
//* By the time we click on any of our buttons, this for loop has already run and the alert says 6. The reason it says six if because our for loop says, when we get to 5 (i < OR equal to 5) we increment it again by 1
//* Since we are only running this loop while i is less than or equal to 5 our loop stops and i remains at the value of 6 while the rest of our code executes. So by the time we click on the buttons, i = 6.
//* We will use an IIFE to preserve the value of i on each iteration in the scope of the IIFE
function createButtons() {
  for (var i = 1; i <= 5; i++) {
    var body = document.getElementsByTagName("BODY")[0];
    var button = document.createElement("BUTTON");
    button.innerHTML = 'Button ' + i;
    (function(num) {
      button.onclick = function() { 
        alert('This is button ' + num);
   };
    })(i)
    body.appendChild(button);
  }
}

// createButtons();
//We wrapped all of our onclick functionality inside of our iife. The important part is that we are passing the current value of i in as a parameter into our iife. So on loop one we pass the value 1 into our iife (button 1), because at that time i = 1 and so on.
//The value of i is then being stored as the num parameter and is encapsulated in the scope of our iife, so the num parameter will never change. It will always be the value passed into our iife on that given iteration of the loop.
//Even though our for loop will move on to the next iteration and our iffe will be executed again that is a different instance of our iife and it has nothing to do with our iife that was executed in the previous loop so they never interfere with each other.

//! On each interation of the for loop, the current value i being passed into our iife and then being stored in the num parameter inside of our iifes scope.

//* ANOTHER SOLUTION: 

function createButtons() {
  for (var i = 1; i <= 5; i++) {
    var body = document.getElementsByTagName("BODY")[0];
    var button = document.createElement("BUTTON");
    button.innerHTML = 'Button ' + i;
    addClick(button, i);
    body.appendChild(button);
  }
}


function addClick(button, i) {
  button.onclick = function() { 
    alert('This is button ' + i);
  }
}

createButtons();

//*ANOTHER EVEN EASIER SOLUTION:
function createButtons() {
  for (let i = 1; i <= 5; i++) { //the use of the let keyword solves our issue, because it is block scoped instead of function scoped.
    var body = document.getElementsByTagName("BODY")[0];
    var button = document.createElement("BUTTON");
    button.innerHTML = 'Button ' + i;
    button.onclick = function() { 
         alert('This is button ' + i);
         console.log(i)
    }
    body.appendChild(button);
  }
}

createButtons();



