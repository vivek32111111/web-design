// Q10. Write a JavaScript function to insert a string within a string at a particular position (default is 1)?
// File name suggestion: insert.js
// Test Data :
// console.log(insert(‘We are doing some exercises.’)); // “We are doing some exercises.”
// console.log(insert(‘We are doing some exercises.’,’JavaScript ’)); // “JavaScript We are doing some exercises.”
// console.log(insert(‘We are doing some exercises.’,’JavaScript ’,18)); // “We are doing some JavaScript exercises.”


const insert = (str , ins_str, n) =>{

    if(typeof(n) == "undefined") {
     n = 0;
   }
    if(typeof(ins_str) == "undefined") {
     ins_str = '';
   }

    return str.slice(0, n) + ins_str + str.slice(n);
     }
 console.log(insert('We are doing some exercises.'));
 console.log(insert('We are doing some exercises.','JavaScript '));
 console.log(insert('We are doing some exercises.','JavaScript ',18));