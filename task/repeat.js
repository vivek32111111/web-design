// Q9. Write a JavaScript function to concatenates a given string n times (default is 1)?
// File name suggestion: repeat.js
// Test Data :
// console.log(repeat(‘Ha!’)); // “Ha!”
// console.log(repeat(‘Ha!’,2)); // “Ha!Ha!”
// console.log(repeat(‘Ha!’,3)); // “Ha!Ha!Ha!”

const repeat = (str,len) => {
    if(typeof(len) == "undefined") {
        len =1;
    }
return str.repeat(len);

}
console.log(repeat('Ha!')); 
console.log(repeat('Ha!',2)); 
console.log(repeat('Ha!',3)); 

