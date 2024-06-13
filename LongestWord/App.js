function findLongestWord(sentence) {
  let words = sentence.split(" ");

  let longestWord = "";

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

let sentence1 = "The quick brown fox jumps over the lazy dog";
let longestWord1 = findLongestWord(sentence1);
console.log(`Longest word in "${sentence1}": ${longestWord1}`); // Output: "jumps"

let sentence2 = "A journey of a thousand miles begins with a single step";
let longestWord2 = findLongestWord(sentence2);
console.log(`Longest word in "${sentence2}": ${longestWord2}`); // Output: "thousand"
