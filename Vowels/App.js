function countVowels(str) {
  // Convert the string to lowercase to make the function case-insensitive
  let lowerStr = str.toLowerCase();

  // Define a set of vowels
  let vowels = "aeiou";

  // Initialize a counter for vowels
  let vowelCount = 0;

  // Iterate through the string and count the vowels
  for (let char of lowerStr) {
    if (vowels.includes(char)) {
      vowelCount++;
    }
  }

  return vowelCount;
}

let testString1 = "Hi am Eswarasamy";
let result1 = countVowels(testString1);
console.log(`Number of vowels in "${testString1}": ${result1}`); // Output: 3

let testString2 = "JavaScript";
let result2 = countVowels(testString2);
console.log(`Number of vowels in "${testString2}": ${result2}`); // Output: 3

let testString3 = "I like Dogs.";
let result3 = countVowels(testString3);
console.log(`Number of vowels in "${testString3}": ${result3}`); // Output: 11
