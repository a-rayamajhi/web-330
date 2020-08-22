/*
============================================
; Title: Exercise 3.2 - The Factory Pattern
; Author: Professor Krasso
; Date:   22 Aug 2020
; Modified By: Anil Rayamajhi
;===========================================
*/

// import statement
const header = require("../header.js");
console.log(
  header.display("Anil", "Rayamajhi", "Exercise 3.2 - The Factory Pattern")
);
console.log("---");

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Oracle {
    username: '<username>',
    password: '<password>',
    server: '<server>',
    version: '<version>'
 }

 Informix {
    username: '<username>',
    password: '<password>',
    server: '<server>'
 }

*/

// start program
function Postgres(properties) {
  this.username = properties.username || "admin";
  this.password = properties.password || "s3cret";
  this.server = properties.server || "localhost:5432";
}

function MySql(properties) {
  this.username = properties.username || "ca-admin";
  this.password = properties.password || "ca-s3cret";
  this.server = properties.server || "localhost:8000";
  this.version = properties.version || 5.7;
}

/**
 *
 * @param {Array} properties
 */
function Oracle(properties) {
  this.username = properties["username"] || "admin";
  this.password = properties["password"] || "o-s3cret";
  this.server = properties["server"] || "localhost:5454";
  this.version = properties["version"] || "11g";
}

/**
 *
 * @param {Array} properties
 */
function Informix(properties) {
  this.username = properties["username"] || "admin";
  this.password = properties["password"] || "in-s3cret";
  this.server = properties["server"] || "localhost:3030";
}

function DatabaseFactory() {}

DatabaseFactory.prototype.databaseClass = MySql;
DatabaseFactory.prototype.createDatabase = function (properties) {
  if (properties.databaseType === "Postgres") {
    this.databaseClass = Postgres;
  }
  if (properties.databaseType === "MySql") {
    this.databaseClass = MySql;
  }
  if (properties.databaseType === "Oracle") {
    this.databaseClass = Oracle;
  }
  if (properties.databaseType === "Informix") {
    this.databaseClass = Informix;
  }

  return new this.databaseClass(properties);
};

var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
  databaseType: "Postgres",
  username: "admin",
  password: "SuperSecret",
});

var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
  databaseType: "MySQL",
  username: "default",
  password: "password",
});

var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase({
  databaseType: "Oracle",
  username: "o-admin",
  password: "password",
});

var informixFactory = new DatabaseFactory();
var informix = informixFactory.createDatabase({
  databaseType: "Informix",
  username: "in-admin",
  password: "password",
});

// Output Object
console.log(oracle);
console.log(informix);
// end program
