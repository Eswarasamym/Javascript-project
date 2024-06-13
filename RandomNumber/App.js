function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

let randomNumber = generateRandomNumber();
console.log(`Random number between 1 and 100: ${randomNumber}`);
