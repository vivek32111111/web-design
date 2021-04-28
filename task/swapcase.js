// Q7. Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case?
// File name suggestion: swapCase.js
// Test Data :
// console.log(swapCase(‘AaBbc’)); // “aAbBC”

const swapCase = (str) => {
    return str.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
        return chr ? match.toUpperCase() : match.toLowerCase();
    });
}
console.log(swapCase('AaBbc'));