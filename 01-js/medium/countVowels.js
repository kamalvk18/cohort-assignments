/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let vowel_count = 0

    for (let i=0; i< str.length; i++){
      let chr = str.charAt(i).toLowerCase()
      if (vowels.includes(chr)) {
        vowel_count += 1
      }
    }

    return vowel_count;
}

module.exports = countVowels;