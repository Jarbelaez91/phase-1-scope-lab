// Write your solution in this file!
var customerName = 'bob'
//Declare a variable in global scope called customerName using the var keyword and assign it the value 'bob'.
const leastFavoriteCustomer = 'mike'

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase()
  //Write a function that accesses that global customerName variable, and uppercases it.
  
  //notice that there is no return statement
  //if you try to use `return customerName.toUpperCase()`, it will return 'BOB', but will not redefine the variable!
}

function setBestCustomer() {
  bestCustomer = 'not bob'
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob'
}

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'billy'
  console.log(leastFavoriteCustomer)
}
