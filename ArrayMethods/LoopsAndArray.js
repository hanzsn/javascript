function sumOfTripleEvents(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      const tripleEvenNumber = array[i] * 3;

      sum += tripleEvenNumber;
    }
  }
  return sum;
}
