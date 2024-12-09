// This file contains the code for completing tasks 1-3 under the section 'Exploring Functions in JavaScript'
console.log("Part 2")
// variables for account balance
let accountBalance = 10000;

// Task 1: Create a function to handle deposits into a bank account. Essentially, adding money to your bank account.
function deposit(depositAmount) {
    accountBalance = accountBalance + depositAmount
    console.log(`Account Balance: $${accountBalance}`)
}

// Task 2: Implement a function to handle withdrawals from a bank account. Essentially, taking money out of your bank account.
function withdrawal(withdrawalAmount) {
    accountBalance = accountBalance - withdrawalAmount
    console.log(`Account Balance: $${accountBalance}`)
}

// Task 3: Develop a function to check the current balance of the account. Lastly, show much much money you have left.
function viewBalance() {
    console.log(`Account Balance: $${accountBalance}`)
}

// assigning value to 'amount' variables
depositAmount = 500;
withdrawalAmount = 150;

// calling functions
viewBalance();
deposit(depositAmount);
withdrawal(withdrawalAmount);