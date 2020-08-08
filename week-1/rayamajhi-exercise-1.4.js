/*
============================================
; Title: Exercise 1.4 - Duck Typing, A.K.A. "Interfaces"
; Author: Professor Krasso
; Date:   8 Aug 2020
; Modified By: Anil Rayamajhi
;===========================================
*/

// import statement
const header = require("../header.js");
console.log(header.display("Anil", "Rayamajhi", "Exercise 1.4"));
/*
 Expected output:

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Car added to the racetrack!
 Truck added to the racetrack!
 Jeep added to the racetrack!

 -- The following vehicles have been added to the racetrack --
 Truck: <Model>
 Car: <Model>
 Jeep: <Model>

*/

// start program

/**
 *
 * @param {string} model
 *
 * Description:  Car Constructor Function
 */
function Car(model) {
  this.model = model;
}

/**
 * Description:  Car Prototype Method
 */
Car.prototype.start = function () {
  console.log("Car added to the racetrack!");
};

/**
 *
 * @param {*} model
 * @param {*} year
 *
 * Description:  Truck Constructor Function
 */
function Truck(model, year) {
  this.model = model;
  this.year = year;
}

/**
 * Description:  Truck Prototype Method
 */
Truck.prototype.start = function () {
  console.log("Truck added to the racetrack!");
};

/**
 *
 * @param {*} model
 * @param {*} year
 * @param {*} color
 *
 * Description:  Jeep Constructor Function
 */
function Jeep(model, year, color) {
  this.model = model;
  this.year = year;
  this.color = color;
}

/**
 * Description:  Jeep Prototype Method
 */
Jeep.prototype.start = function () {
  console.log("Jeep added to the racetrack!");
};

var racetrack = [];

function driveIt(vehicle) {
  vehicle.start();
  racetrack.push(vehicle);
}

var accord = new Car("Accord"),
  cyberTruck = new Truck("Cyber Truck", "2022"),
  jeepWrangler = new Jeep("Jeep Wrangler", "2020", "Red And Black");

console.log("---\n");

driveIt(cyberTruck);
driveIt(accord);
driveIt(jeepWrangler);

console.log("\n-- The following vehicles have been added to the racetrack --");

racetrack.forEach((el) => {
  console.log(el.constructor.name + ": " + el.model);
});
// end program
