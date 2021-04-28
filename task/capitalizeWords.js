// Q6. Write a JavaScript function to capitalize the first letter of each word in a string?
// File name suggestion: capitalizeWords.js
// Test Data :
// console.log(capitalizeWords(‘js string exercises’)); // “Js String Exercises”
const capitalizeWords = (str) => {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
 }

console.log(capitalizeWords('js string exercises')); 