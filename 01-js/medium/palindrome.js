/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let i = 0
  let j = str.length - 1

  const punctuations = ["!", ",", "'", ".", "?", " "]

  while(i<j){
    while (punctuations.includes(str.charAt(i))) i+=1;
    while (punctuations.includes(str.charAt(j))) j-=1;

    if (str.charAt(i).toLowerCase() !== str.charAt(j).toLowerCase()){
      return false
    }
    i+=1;
    j-=1;
  }

  return true
}

module.exports = isPalindrome;
