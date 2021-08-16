/*
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays 😉
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:
4.1. First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together
4.2. To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array
*/

'use strict';

// * Changeable invoices
const invoices = {
  steven: [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52],
  peter: [150, 360, 86, 75, 130, 210, 86, 15, 99, 530],
};

// * Tip Data in percent depending on invoice amount
const tipData = {
  tipOne: 0, // less then 50
  tipTwo: 15, // between 50 and 300
  tipThree: 20, // greater then 300
};

// * Tip calculation
const calcTip = invoiceAmount =>
  invoiceAmount < 50
    ? tipData.tipOne
    : invoiceAmount >= 50 && invoiceAmount <= 300
    ? invoiceAmount * (tipData.tipTwo / 100)
    : invoiceAmount * (tipData.tipThree / 100);

// * General tips from each person
const tips = {
  steven: [],
  peter: [],
};

// * Total invoices for each person
const totalInvoices = {
  steven: [],
  peter: [],
};

for (let i = 0; i < invoices.steven.length; i++) {
  tips.steven.push(calcTip(invoices.steven[i]));
  totalInvoices.steven.push(invoices.steven[i] + calcTip(invoices.steven[i]));
}

for (let i = 0; i < invoices.peter.length; i++) {
  tips.peter.push(calcTip(invoices.peter[i]));
  totalInvoices.peter.push(invoices.peter[i] + calcTip(invoices.peter[i]));
}

console.log(tips.steven);
console.log(tips.peter);
console.log(totalInvoices.steven);
console.log(totalInvoices.peter);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage(tips.steven));
console.log(calcAverage(tips.peter));
console.log(calcAverage(totalInvoices.steven));
console.log(calcAverage(totalInvoices.peter));
