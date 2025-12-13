// even, odd identifier using forEach
const num = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
const newArr = num.map(Number);

newArr.forEach((n) => {
  if (n % 2 === 0) console.log("even");
  else console.log("odd");
});

// even, odd identifier using map
const map = newArr.map((n) => (n % 2 === 0 ? "even" : "odd"));
console.log(`\n${map.join(" ")}`); // join() to remove comma
