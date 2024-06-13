function isPalindrome(str) {
  let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0;
  let right = cleanStr.length - 1;
  while (left < right) {
    if (cleanStr[left] !== cleanStr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

let testString1 = "true";
let result1 = isPalindrome(testString1);
console.log(`${testString1} Is a palindrome: ${result1}`);

let testString2 = "A man, a plan, a canal, Panama!";
let result2 = isPalindrome(testString2);
console.log(`${testString2} Is a palindrome: ${result2}`);

let testString3 = "racecar";
let result3 = isPalindrome(testString3);
console.log(`${testString3} Is a palindrome: ${result3}`);

let testString4 = "Was it a car or a cat I saw?";
let result4 = isPalindrome(testString4);
console.log(`${testString4} Is a palindrome: ${result4}`);

let testString5 = "Don't come";
let result5 = isPalindrome(testString5);
console.log(`${testString5} Is a palindrome: ${result5}`);
