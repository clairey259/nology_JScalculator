"use strict";

/* 
onclick handle button press
handle long numbers
*/
function handleButtonPress(event) {
  var value = event.target.innerText;
  var output = document.getElementById("display");
  output.innerHTML = output.innerHTML + value;
}

function handleButtonPressPosNeg() {
  var element = document.getElementById("display");
  var value = element.innerHTML;
  console.log(value);
  var valueInt = parseFloat(value);

  if (valueInt > 0 || value === "") {
    value = "-" + value;
  } else if (value < 0 || value === "-") {
    value = value.split("");
    value.shift();
    console.log(value);
    value = value.join("");
  }

  element.innerHTML = value;
}

function handleButtonPressClear(event) {}

function handleButtonPressEquals(event) {} // function handleLongInput() {
//     const input = document.getElementById("display");
//     if (input.length > 15){
//         ??
//     }
// }