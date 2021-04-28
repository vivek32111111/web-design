// Q3. Write a JavaScript function to extract a specified number of characters from a string?
// File name suggestion: truncateString.js
// Test Data :
// console.log(truncateString(“Robin Singh”,4)); // “Robi”4
truncatestring = function (str1, length) {
  

        return str1.substr(0, length);

};
console.log(truncatestring("Robin Singh",4));