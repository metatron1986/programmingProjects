/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.

Test data:
Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
*/

"use strict";

// * BodyData of each person
const BodyData = {
  mark: {
    mass: 78, // kg
    height: 1.69, // Meter
  },
  john: {
    mass: 92, // kg
    height: 1.95, // Meter
  },
};

// * bmi calculation
const bmi = function (mass, height) {
  return mass / height ** 2;
};

// * Saving BMI of each Person
const marksBmi = bmi(BodyData.mark.mass, BodyData.mark.height);
const johnsBmi = bmi(BodyData.john.mass, BodyData.john.height);

// * Comparison bmi of two persons
const markHigherBMI = marksBmi > johnsBmi ? true : false;

// * Bmi output
console.log(marksBmi);
console.log(johnsBmi);

// * boolean output whether one person's bmi is greater than the other person's bmi
console.log(markHigherBMI);

/*
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
*/

// * Return whose bmi is greater
const whichBmiIsBigger = function () {
  if (markHigherBMI === true) {
    return `Mark's BMI ${marksBmi} is higher than John's ${johnsBmi}`;
  } else {
    return `John's BMI ${johnsBmi} is higher than Mark's ${marksBmi}`;
  }
};

// * Output whose bmi is greater
console.log(whichBmiIsBigger());
