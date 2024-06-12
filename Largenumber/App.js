function findLargestNumber(numbers) {
  if (numbers.length === 0) {
    throw new Error("The array is empty");
  }

  let largest = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }
  return largest;
}

const numbersArray = [10, 3, 45, 7, 30];
const largestNumber = findLargestNumber(numbersArray);
console.log(`The largest number is ${largestNumber}`); // Outputs: "The largest number is 45"
