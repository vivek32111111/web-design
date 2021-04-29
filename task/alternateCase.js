// Q8. Write a JavaScript function that takes a string which can have both lower and upper case letters as a parameter and converts alternate character to upper case & lower case, starting from upper case?
// File name suggestion: alternateCase.js
// Test Data :
// console.log(alternateCase(‘samsung’)); // “SaMsUnG”

const alternateCase = (str) => {
    res='';
    for (var i = 0; i < str.length; ++i) {
    c = str[i];
    if (i % 2 == 0) {
        res += c.toUpperCase();
    } else {
        res += c.toLowerCase(); 
    }
}
return res;
}
console.log(alternateCase('samsung'));