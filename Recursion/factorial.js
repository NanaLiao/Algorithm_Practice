function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(3));

// factorial(3)
// return 3 * factorial(2)
//             return 2 *  factorial(1)
//                          return 1