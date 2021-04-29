// Q7. Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case?
// File name suggestion: swapCase.js
// Test Data :
// console.log(swapCase(‘AaBbc’)); // “aAbBC”

const swapCase = (str) => {
    res='';
for (var i = 0; i < str.length; ++i) {
    c = str[i];
  if (c == c.toUpperCase()) {
    res += c.toLowerCase();
  } else if (c == c.toLowerCase()) {
    res += c.toUpperCase();
  } else {
    res += c;
  }
}
return res;
}
console.log(swapCase('AaBbc'));