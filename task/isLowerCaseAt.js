// Q15. Write a JavaScript function to test whether the character at the provided (character) index is upper case?
// File name suggestion: isLowerCaseAt.js
// Test Data :
// console.log(isLowerCaseAt(‘Js STRING EXERCISES’, 1)); // true


function isLowerCaseAt(str, index) {
    return str.charAt(index).toLowerCase() === str.charAt(index);
       }
   console.log(isLowerCaseAt ('Js STRING EXERCISES', 1));
   