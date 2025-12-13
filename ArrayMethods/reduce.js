const arrNum = ["2", "4", "6", "8", "10"];
const num = arrNum.map(Number);

const red = num.reduce((acc, curr) => acc + curr, 2);
console.log(red);

const cars = [
  "lamborghini",
  "corvet",
  "mcLaren",
  "miata",
  "porsche",
  "lamborghini",
  "porsche",
  "lamborghini",
  "corvet",
  "porsche",
  "mcLaren",
  "porsche",
  "miata",
  "lamborghini",
  "porsche",
  "mcLaren",
];

const countCars = cars.reduce((acc, car) => {
  acc[car] = (acc[car] || 0) + 1;
  return acc;
}, {});

console.log(countCars);

/* reduce takes 2 argument(acc, curr), always start at 'acc' = 0 it stores results and 'curr' = currentValue or current element in the array
    and check if cars exist in the object add || 0, add + 1 to the count for this car and return the updated accumulator. '{}' = empty object*
    
    in if, else
        if(acc[curr]){
        acc[curr] += 1;
    } else {
        acc[curr] = 1;
    }*/
