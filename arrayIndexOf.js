//! What will be logged out? 

console.log([10, 20, 30, 40, 50].indexOf(30)); //2
console.log([{ name: 'Pam' }, { name: 'Kent' }].indexOf({ name: 'Kent' })); //-1, means the index of this abject is not found in our array at all. This is because two objects are never the same in js. These are both totally separate objects and defined independently
console.log('hello world'.indexOf('o')); //4
console.log([[1], [2], [3], [4]].indexOf([2]));//-1 means the index of this array is not found in our array at all. This is because two arrays are never the same in js. These are both totally separate objects and defined independently.