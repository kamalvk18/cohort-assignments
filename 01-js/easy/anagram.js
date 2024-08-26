/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length != str2.length) return false;

  let m1 = {}
  let m2 = {}
  for(var i = 0; i<str1.length; i++){
    char1 = str1.charAt(i).toLowerCase()
    char2 = str2.charAt(i).toLowerCase()
    m1[char1] = (m1[char1] || 0) + 1
    m2[char2] = (m2[char2] || 0) + 1
  }

  for(let key in m1){
    if (m1[key] !== m2[key]) return false
  }

  return true
}

module.exports = isAnagram;
