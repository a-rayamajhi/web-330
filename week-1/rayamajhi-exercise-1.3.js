/*
============================================
; Title: Exercise 1.3 - Class Refresher
; Author: Professor Krasso
; Date:   8 Aug 2020
; Modified By: Anil Rayamajhi
;===========================================
*/

// import statement
const header = require("../header.js");
console.log(header.display("Anil", "Rayamajhi", "Exercise 1.3"));
/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 -- DISPLAYING CELL PHONE DETAILS --
 Manufacturer: <manufacturer>
 Model: <model>
 Color: <color>
 Price: <price>


*/

// start program
/**
 *
 * @param {string} manufacturer
 * @param {string} model
 * @param {string} color
 * @param {string} price
 *
 * Description:  CellPhone Constructor Function
 */
function CellPhone(manufacturer, model, color, price) {
  this.manufacturer = manufacturer;
  this.model = model;
  this.color = color;
  this.price = price;

  this.getPrice = function () {
    return this.price;
  };

  this.getModel = function () {
    return this.model;
  };

  this.getDetails = function () {
    return (
      "\n-- DISPLAYING CELL PHONE DETAILS --\nManufacturer: " +
      this.manufacturer.toUpperCase() +
      "\nModel: " +
      this.getModel() +
      "\nColor: " +
      this.capitalize() +
      "\nPrice: " +
      this.getPrice()
    );
  };
}

/**
 * @param {string} color
 *
 * Description:  CellPhone Constructor Prototype
 */
CellPhone.prototype.capitalize = function () {
  return this.color
    .split(" ")
    .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
    .join(" ");
};

var cellPhone = new CellPhone("Google", "Pixel 4 XL", "clearly white", "$999");

console.log(cellPhone.getDetails());
// end program
