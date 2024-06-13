function reverseString(str) {
  let charArray = str.split("");

  let reversedArray = charArray.reverse();

  let reversedString = reversedArray.join("");

  return reversedString;
}

let originalString = "Eswarasmy";
let reversed = reverseString(originalString);
console.log(reversed);
