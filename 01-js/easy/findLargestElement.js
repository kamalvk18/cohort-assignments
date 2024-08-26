/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    if (numbers.length == 0) return undefined;

    var currentMax = -(10**18)
    numbers.forEach(element => {
        currentMax = Math.max(currentMax, element)
    });
    return currentMax
}

module.exports = findLargestElement;