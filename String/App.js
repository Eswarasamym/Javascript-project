// Function to convert a string to uppercase
function convertToUpperCase(str) {
  return str.toUpperCase();
}

// Event listener for form submission
document
  .getElementById("uppercaseForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    // Get the value of the input field
    var inputString = document.getElementById("inputString").value;

    // Convert the string to uppercase
    var upperCaseString = convertToUpperCase(inputString);

    // Display the result
    document.getElementById("result").innerText =
      "Uppercase: " + upperCaseString;
  });
