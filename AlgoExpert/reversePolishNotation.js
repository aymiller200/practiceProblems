
/* 
!Reverse polish notation: 
    *also known as postfix: 
    *an operator is written after its operands. the infix expression 2+3 is 23+ in postfix notation. For postfix expressions, operations are performed in the order in which they are written (left to right).
Ex: input [2, 1, '+', 3, '*']
* Data stack approach
* If the element is a number we want to push that into a stack
* so two and one go into the stack, then when we come across the operator we want to pop that 1 (num1) out of the stack and set it to the two num2, and then pop the 2 out and set is to num1. Then we can add num1 and num2 and run it with the operand and set that new num to 1 + 2
*then we're going to come to the 3 and push that into the stack, and we are going to repeat the process about for that last operator. We're going to pop out the newNum 3 and set it to num2, and pop out the 3 and set it to num2, and set newNum = 3*3
*last element in stack will be 9

*/

var evalRPN = function(tokens) {
    const stack = [];

    const operators = {
      '+': (num1, num2) => num1 + num2,
      '-': (num1, num2) => num1 - num2,
      '*': (num1, num2) => num1 * num2,
      '/': (num1, num2) => Math.trunc(num1 / num2)
    };

    //iterating over the tokens saying if it is not an operand we are going to parse that string into a number and push it into the stack. If it is an operand, we are going to pull out that num1 and num2 and run the function of plus with the input of num1 num2

    for(let token of tokens){
      if(operators[token]) {
        let num2 = stack.pop();
        let num1 = stack.pop();

       stack.push(operators[token](num1, num2))
      }else {
        stack.push(parseInt(token))
      }
    }

    return stack.pop() //returns last element
}

console.log(evalRPN(['1','2', '3', '+', '3', '4', '-']))


