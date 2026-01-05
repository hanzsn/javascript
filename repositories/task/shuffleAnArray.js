let arr = [1, 2, 3];

const shuffle = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

console.log(shuffle(arr));
