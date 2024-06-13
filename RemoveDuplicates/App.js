function removeDuplicates(arr) {
  let uniqueArray = [];
  let seen = {};

  for (let i = 0; i < arr.length; i++) {
    if (!seen[arr[i]]) {
      uniqueArray.push(arr[i]);
      seen[arr[i]] = true;
    }
  }

  return uniqueArray;
}

let array1 = [1, 2, 2, 3, 4, 4, 5];
let uniqueArray1 = removeDuplicates(array1);
console.log(uniqueArray1);

let array2 = ["apple", "banana", "apple", "orange", "banana"];
let uniqueArray2 = removeDuplicates(array2);
console.log(uniqueArray2);

let array3 = ["BMW", "AUdi", "Volvo", "BMW", "TATA"];
let uniqueArray3 = removeDuplicates(array3);
console.log(uniqueArray3);
