// Function to convert minutes to seconds
function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

document.getElementById("convert").addEventListener("submit", function (event) {
  event.preventDefault();

  // Get the value of the input field
  var minutes = parseInt(document.getElementById("minutes").value);

  // Convert minutes to seconds
  var seconds = convertMinutesToSeconds(minutes);

  document.getElementById("result").innerText =
    minutes + " minutes is equal to " + seconds + " seconds.";
});
