// Q12. Write a JavaScript function to count the occurrence of a substring in a string?
// File name suggestion: count.js
// Test Data :
// console.log(count(“The quick brown fox jumps over the lazy dog”, ‘the’)); // 2
const count = (str,str1) => {
    str += '';
    str1 += '';

    if (str1.length <= 0) 
    {
        return str.length + 1;
    }

       subStr = str1.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
       return (str.match(new RegExp(subStr, 'gi')) || []).length;
    }
 
console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
