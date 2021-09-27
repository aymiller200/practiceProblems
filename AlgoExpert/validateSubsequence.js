function isValidSubsequence(array, sequence) {
  let ind = 0
	for(const value of array ){
		if (ind === sequence.length) break;
		if (sequence[ind] === value) ind++
	}
  return ind === sequence.length;
}

console.log(isValidSubsequence([1,2,3], [1,2, 3,4]))
