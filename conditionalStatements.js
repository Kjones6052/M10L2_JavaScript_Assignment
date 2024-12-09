// This file contains the code for completing tasks 1 and 2 under the section 'Exploring Conditional Statement and Loops'

/* 
Task 1: 
Implement a conditional statement to check if a user is logged in.

Task 2: 
If they are logged in, loop over the 'cart' array below and log the list of available products to the user. 
If they are not logged in, tell the user they will need to log in before they can view their cart.
*/
console.log("Part 1")
// Task 1
let loggedIn = true;  

// Task 2
if (loggedIn === true) {
    console.log("Cart Items:")
    let cart = ['Shirts', 'Shoes', 'Bread', 'Cell Phone', 'Candy Corn', 'The Pragmatic Programmer: Your Journey To Mastery, 20th Anniversary Edition (2nd Edition)', 'Tomato']
    for (let i = 0; i < cart.length; i++) {
        console.log(cart[i])
    }
} else {
    console.log("You will need to log in before you can view your cart.")
}
