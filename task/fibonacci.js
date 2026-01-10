const fibonacci = (n) => {
  if (n <= 2) return 1;
  let first = 1;
  let second = 1;
  for (let i = 3; i <= n; i++) {
    const next = first + second;
    first = second;
    second = next;
  }
  return second;
};
