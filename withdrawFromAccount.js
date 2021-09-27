//!What will be logged out? 
const account1 = {
  name: 'Jen',
  totalAmount: 5000,
  deductAmount: function(amount) {
    this.totalAmount -= amount;
    return 'Amount in account: ' + this.totalAmount;
  },
}; //defining an account1 object.
 
const account2 = {
  name: 'James',
  totalAmount: 8000,
};
 
const withdrawFromAccount = function(amount) {
  return account1.deductAmount.bind(account2, amount);
  //Taking deductAmount method from account1 and binding the this context to account2
  //Bind can take in parameters for the functino it is attached to as well
};
 
console.log(withdrawFromAccount(500)()); //7500, we have to invoke our expression again
console.log(withdrawFromAccount(200)()); //7300
