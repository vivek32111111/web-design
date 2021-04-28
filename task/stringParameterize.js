// Q4. Write a JavaScript function to parameterize a string?
// File name suggestion: stringParameterize.js
// Test Data :
// console.log(stringParameterize(“Robin Singh from USA.“)); // “robin-singh-from-usa”

stringparameterize = function (str1) {
    return str1.toLowerCase().replace(/\s/g, "-");
};
console.log(("Robin Singh from USA."));
