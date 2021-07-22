/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array)
*/

'use strict';

// * Changeable invoices
const invoices = {
  steven: [125, 555, 44],
  peter: [150, 360, 87],
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
  steven: [
    calcTip(invoices.steven[0]),
    calcTip(invoices.steven[1]),
    calcTip(invoices.steven[2]),
  ],
  peter: [
    calcTip(invoices.peter[0]),
    calcTip(invoices.peter[1]),
    calcTip(invoices.peter[2]),
  ],
};

// * Output tips
console.log(tips.steven);
console.log(tips.peter);

// * Total invoices for each person
const totalInvoices = {
  steven: [
    invoices.steven[0] + tips.steven[0],
    invoices.steven[1] + tips.steven[1],
    invoices.steven[2] + tips.steven[2],
  ],
  peter: [
    invoices.peter[0] + tips.peter[0],
    invoices.peter[1] + tips.peter[1],
    invoices.peter[2] + tips.peter[2],
  ],
};

// * Output each invoice for each person
console.log(
  totalInvoices.steven[0],
  totalInvoices.steven[1],
  totalInvoices.steven[2]
);
console.log(
  totalInvoices.peter[0],
  totalInvoices.peter[1],
  totalInvoices.peter[2]
);








