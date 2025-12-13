/* Even Number Extractor (Filter)
  Create an array of numbers. Use filter to create a new array containing only the even numbers, then print it.
  Example: [1, 2, 3, 4, 5] → [2, 4] */

const num = [5, 10, 15, 20, 25];

const evenNum = num.filter((n) => n % 2 === 0);
console.log(evenNum.join(", "));
