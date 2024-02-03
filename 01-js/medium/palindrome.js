/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  let newStr = "";
  
  for(let ch of str) {
    if(ch >= 'a' && ch <= 'z') 
    newStr += ch;
  }

  let i=0, j=newStr.length-1;
  while(i<j) {
    if(newStr[i] != newStr[j])
      return false;
    i++;
    j--;
  }

  return true;
}

module.exports = isPalindrome;
