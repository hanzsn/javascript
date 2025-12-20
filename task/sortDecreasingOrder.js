let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

let join = arr.join(", ");

console.log(join); // 8, 5, 2, 1, -10

// copy and sort array
let arr2 = ["HTML", "JavaScript", "CSS"];

const copySorted = (arr2) => {
  return arr2.sort();
};

let sorted = copySorted(arr2);

console.log(sorted); // CSS, HTML, JavaScript
