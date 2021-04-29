// Q13. Write a JavaScript function to find a word within a string?
// File name suggestion: searchWord.js
// Test Data :
// console.log(searchWord(‘The quick brown fox’, ‘fox’)); // “‘fox’ was found 1 times.”
// console.log(searchWord(‘aa, bb, cc, dd, aa’, ‘aa’)); // “‘aa’ was found 2 times.”

const searchword = (text,word) =>{
    
    var x = 0, y=0;
   
    for (i=0;i< text.length;i++)
        {
        if(text[i] == word[0])
            {
            for(j=i;j< i+word.length;j++)
               {
                if(text[j]==word[j-i])
                  {
                    y++;
                  }
                if (y==word.length){
                    x++;
                }
            }
            y=0;
        }
    }
   return "'"+word+"' was found "+x+" times.";
}
console.log(searchword('The quick brown fox', 'fox'));
console.log(searchword('aa, bb, cc, dd, aa', 'aa'));
