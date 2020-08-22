/*
============================================
; Title: Exercise 3.3 - The Factory Pattern
; Author: Professor Krasso
; Date:   22 Aug 2020
; Modified By: Anil Rayamajhi
;===========================================
*/

// import statement
const header = require("../header.js");
console.log(
  header.display("Anil", "Rayamajhi", "Exercise 3.2 - The Singleton Pattern")
);
console.log("---");

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Same database instance? true

*/

// start program
/**
 * @returns {function}
 */
var DatabaseSingleton = (function () {
  var instance;
  function createInstance() {
    var postgresDatabase = new Object("Database instance initialized!");
    return postgresDatabase;
  }
  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

/**
 * @returns {void}
 */
function databaseSingletonTest() {
  var oracle = DatabaseSingleton.getInstance();
  var informix = DatabaseSingleton.getInstance();

  console.log(`Same database instance? ${oracle === informix}`);
}

databaseSingletonTest();
// end program
