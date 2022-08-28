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

function handleButtonPressClear(event) {
  var output = document.getElementById("display");
  output.innerHTML = "";
} // function handleButtonPressEquals(event) {
//     const output = document.getElementById("display");
//     const value = output.innerHTML
//     output.innerHTML = eval(value)
// }


function handleButtonPressEquals(event) {
  var output = document.getElementById("display");
  var str = output.innerHTML;

  var compute = function compute() {
    var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var total = 0;
    str = str.match(/[+\−]*(\.\d+|\d+(\.\d+)?)/g) || [];

    while (str.length) {
      total += parseFloat(str.shift());
    }

    ;
    return total;
  };

  output.innerHTML = compute(str);
} // function handleLongInput() {
//     const input = document.getElementById("display");
//     if (input.length > 15){
//         ??
//     }
// }