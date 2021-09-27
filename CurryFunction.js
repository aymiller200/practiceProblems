/* 
!CURRY THIS FUNCTION:
*/

function getProduct(num1, num2) {
  return num1 * num2
}

//CURRIED: 
function getProduct(num1){
  return function(num2){
    return num1 * num2
  }
}
console.log(getProduct(65)(72))

//!WHY IS CURRYING A USEFUL TECHNIQUE? 
function getTravelTime(distance) {
  return function(speed) {
    return distance / speed
  };
}

const travelTimeBosNyc = getTravelTime(400);
console.log(travelTimeBosNyc(50))
//here we have used currying to apply a more general function which is our getTravelTime function to a specific use case, which is getting the travel time between boston and nyc.
//We could also make other functions like travelTimeMiamiToAtlanta by using the exact same getTravelTime function, but with a different distance
