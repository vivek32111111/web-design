// Q14. Write a JavaScript function to test whether the character at the provided (character) index is upper case?
// File name suggestion: isUpperCaseAt.js
// Test Data :
// console.log(isUpperCaseAt(‘Js STRING EXERCISES’, 1)); // false

const isUpperCaseAt = (str, index) => {
    return str.charAt(index).toUpperCase() === str.charAt(index);
       }
   console.log(isUpperCaseAt('Js STRING EXERCISES', 1));