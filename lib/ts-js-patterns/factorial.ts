function factorial(x: number): number {
  console.log(x);
  return x === 0 ? 1 : (x * factorial(x-1));
}

console.log(factorial(8));
