/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300
*/

'use strict';

// * Changeable invoice amount
let invoiceAmount = 275;

// * Tip Data in percent depending on invoice amount
const tipData = {
    "tipOne": 0, // less then 50
    "tipTwo": 15, // between 50 and 300 
    "tipThree": 20 // greater then 300
};

// * Tip calculation
const tip = function(invoiceAmount) {
    return invoiceAmount < 50 ? tipData.tipOne : invoiceAmount >= 50 && invoiceAmount <= 300 
    ? invoiceAmount * (tipData.tipTwo / 100) : invoiceAmount * (tipData.tipThree / 100);
}

const customerInformation =  `The bill was ${invoiceAmount} €, the tip was ${tip(invoiceAmount)} €, 
and the total value ${invoiceAmount + tip(invoiceAmount)} €`;

console.log(customerInformation);

