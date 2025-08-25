let arr = ["classroom", "car", "bike", "cab", "bat"];

// function definition
function printText(text) {
  console.log("The text given is: " + text);
}

// loop
for (let i = arr.length - 1; i >= 0; i--) {
  printText(arr[i]);
}
