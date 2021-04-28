// Q5. Write a JavaScript function to capitalize the first letter of a string?
// File name suggestion: capitalize.js
// Test Data :
// console.log(capitalize(‘js string exercises’)); // “Js string exercises”

capitalize = function(str1){
    return str1.charAt(0).toUpperCase() + str1.slice(1);
  }
      
   console.log(capitalize('js string exercises'));