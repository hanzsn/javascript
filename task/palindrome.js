const palindrome = (word) => {
  const reverse = word.split("").reverse().join("");
  return word === reverse;
};
