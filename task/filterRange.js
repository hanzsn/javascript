// flter range
let arr = [5, 3, 8, 1];

const filterRange = (arr, a, b) => {
  return arr.filter((item) => a <= item && item <= b).join(", ");
};

let filtered = filterRange(arr, 1, 4);

console.log(filtered);

// filter range 'place
const filterRangeinPlace = (arr2, a, b) => {
  for (let i = 0; i < arr2.length; i++) {
    let val = arr2[i];

    if (val < a || val > b) {
      arr2.splice(i, 1);
      i--;
    }
  }
  return arr2;
};

let arr2 = [2, 1, 5, 6, 10, 25, 13, 12];

console.log(filterRangeinPlace(arr2, 1, 10));
