// Q11. Write a JavaScript function to chop a string into chunks of a given length?
// File name suggestion: stringChop.js
// Test Data :
// console.log(stringChop(‘w3resource’)); // [“w3resource”]
// console.log(stringChop(‘w3resource’,2)); // [“w3", “re”, “so”, “ur”, “ce”]
// console.log(stringChop(‘w3resource’,3)); // [“w3r”, “eso”, “urc”, “e”]


const stringchop = (str,n) => {
    if (str == null) return [];
    str = String(str);
    n = ~~n;
return n > 0 ? str.match(new RegExp('.{1,' + n + '}', 'g')) : [str];
}
console.log(stringchop('w3resource'));
console.log(stringchop('w3resource',2));
console.log(stringchop('w3resource',3));