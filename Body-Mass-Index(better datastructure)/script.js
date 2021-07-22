/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
*/

"use strict";

// * dataForBMICalculation of each person
const dataForBMICalculation = {
  persons: {
    mark: {
      fullName: "Mark Miller",
      mass: 78, // kg
      height: 1.69, // Meter
      // * bmi calculation
      calcBMIMark: function () {
        // bmi calculation
        return this.mass / this.height ** 2;
      },
    },
    john: {
      fullName: "John Smith",
      mass: 92, // kg
      height: 1.95, // Meter
      calcBMIJohn: function () {
        // bmi calculation
        return this.mass / this.height ** 2;
      },
    },
  },
};

// * Comparison bmi of two persons
const markHigherBMI =
  dataForBMICalculation.persons.mark.calcBMIMark() >
  dataForBMICalculation.persons.john.calcBMIJohn()
    ? true
    : false;

// * Bmi output
console.log(dataForBMICalculation.persons.mark.calcBMIMark());
console.log(dataForBMICalculation.persons.john.calcBMIJohn());

// * boolean output whether one person's bmi is greater than the other person's bmi
console.log(markHigherBMI);

// * Return whose bmi is greater
const whichBmiIsBigger = function () {
  if (markHigherBMI === true) {
    return `${dataForBMICalculation.persons.mark.fullName.substring(
      0,
      4
    )}'s BMI ${dataForBMICalculation.persons.mark.calcBMIMark()} is higher than ${dataForBMICalculation.persons.john.fullName.substring(
      0,
      4
    )}'s ${dataForBMICalculation.persons.john.calcBMIJohn()}!`;
  } else {
    return `${dataForBMICalculation.persons.john.fullName.substring(
      0,
      4
    )}'s BMI ${dataForBMICalculation.persons.john.calcBMIJohn()} is higher than ${dataForBMICalculation.persons.mark.fullName.substring(
      0,
      4
    )}'s ${dataForBMICalculation.persons.mark.calcBMIMark()}!`;
  }
};

// * Output whose bmi is greater
console.log(whichBmiIsBigger());
