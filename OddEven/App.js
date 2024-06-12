function isEvenOrOdd(number) {
  if (number % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

// Example usage
const number = 10;
const result = isEvenOrOdd(number);
console.log(`${number} is ${result}.`);
