/* 
! Write a function that takes in a non-empty array of distinct integers and an
!  integer representing a target sum. If any two numbers in the input array sum
!  up to the target sum, the function should return them in an array, in any
!  order. If no two numbers sum up to the target sum, the function should return
!  an empty array.
*/

function twoNumberSum(array, targetSum){

  for(let i = 0; i < array.length; i++){
    const first = array[i];

    for(let j = i + 1; j < array.length; j++){
      const second = array[j]

      if (first + second === targetSum){
        return [first, second]
      }
    }
  }
    return[]
}

console.log(twoNumberSum([10,17, 12, 13, 1, -10, 50], 0))