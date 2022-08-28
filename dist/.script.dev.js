"use strict";

/* 
onclick handle button press
handle long numbers
*/
function handleButtonPressOne(x) {
  var value = document.getElementById("buttonOne");
  var output = document.getElementsByClassName("display");
  output.innerHTML = output.innerHTML + value;
  return handleButtonPressOne(x);
}

console.log(handleButtonPressOne(x));