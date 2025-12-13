const numbers = [2, 4, 6];
const allEven = numbers.every((num) => num % 2 === 0);
console.log(allEven); // true (all numbers are even)

const mixed = [2, 3, 4];
console.log(mixed.every((num) => num % 2 === 0)); // false
