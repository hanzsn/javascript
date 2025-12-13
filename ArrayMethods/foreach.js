const num = ["1", "2", "3", "4", "5"];
num.map(Number);
// map
const use = num.map((num) => num * 2);
console.log(typeof use);

// foreach
use.forEach((n) => {
  console.log(n);
});
