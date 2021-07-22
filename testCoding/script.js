const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYeah: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  calcAge: function () {
    return 2037 - this.birthYeah;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}
        and he has ${
          this.hasDriversLicense === true ? "a" : "no"
        } driver's license`;
  },
};

console.log(jonas.calcAge());
console.log(jonas.getSummary());
