/*
============================================
; Title: Exercise 2.2 - Prototypes
; Author: Professor Krasso
; Date:   13 Aug 2020
; Modified By: Anil Rayamajhi
;===========================================
*/

// import statement
const header = require("../header.js");
console.log(header.display("Anil", "Rayamajhi", "Exercise 2.2 - Prototypes"));
console.log("---");
/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 The person's full name is '<fullname>.'
 The person's age is '<age>.'

*/

// start program
/**
 * Object Prototype
 */
var person = {
  getAge: function () {
    console.log("The person's age is %s", this.age);
  },
};

/**
 * Object literal
 */
var anil = Object.create(person, {
  age: {
    value: "26",
  },
  fullname: {
    value: "Anil Rayamajhi",
  },
});

console.log("The person's full name is %s", anil.fullname);
anil.getAge();

// end program
