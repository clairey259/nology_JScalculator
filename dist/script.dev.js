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
} //  --- Works using eval() ---
//     function handleButtonPressEquals(event) {
//     const output = document.getElementById("display");
//     const value = output.innerHTML
//     output.innerHTML = eval(value)
// }


function handleButtonPressEquals(event) {
  console.log("working");
  var output = document.getElementById("display");

  function tokenize(s) {
    // --- Parse a calculation string into an array of numbers and operators
    var r = [];
    var token = '';
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = s[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var character = _step.value;

        if ('^*/+-'.indexOf(character) > -1) {
          if (token === '' && character === '-') {
            token = '-';
          } else {
            r.push(parseFloat(token), character);
            token = '';
          }
        } else {
          token += character;
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    if (token !== '') {
      r.push(parseFloat(token));
    }

    return r;
  }

  function calculate(tokens) {
    // --- Perform a calculation expressed as an array of operators and numbers
    var operatorPrecedence = [{
      '^': function _(a, b) {
        return Math.pow(a, b);
      }
    }, {
      '*': function _(a, b) {
        return a * b;
      },
      '/': function _(a, b) {
        return a / b;
      }
    }, {
      '+': function _(a, b) {
        return a + b;
      },
      '-': function _(a, b) {
        return a - b;
      }
    }];
    var operator;

    for (var _i = 0, _operatorPrecedence = operatorPrecedence; _i < _operatorPrecedence.length; _i++) {
      var operators = _operatorPrecedence[_i];
      var newTokens = [];
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = tokens[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var token = _step2.value;

          if (token in operators) {
            operator = operators[token];
          } else if (operator) {
            newTokens[newTokens.length - 1] = operator(newTokens[newTokens.length - 1], token);
            operator = null;
          } else {
            newTokens.push(token);
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      tokens = newTokens;
    }

    if (tokens.length > 1) {
      console.log('Error: unable to resolve calculation');
      return tokens;
    } else {
      return tokens[0];
    }
  }

  function pieval(input) {
    var openParenCount = 0;
    var myOpenParenIndex = 0;
    var myEndParenIndex = 0;
    var result = [];

    for (var i = 0; i < input.length; i++) {
      if (input[i] === "(") {
        if (openParenCount === 0) {
          myOpenParenIndex = i; // checking if anything exists before this set of parentheses

          if (i !== myEndParenIndex) {
            if (!isNaN(input[i - 1])) {
              result.push(input.substring(myEndParenIndex, i) + "*");
            } else {
              result.push(input.substring(myEndParenIndex, i));
            }
          }
        }

        openParenCount++;
      }

      if (input[i] === ")") {
        openParenCount--;

        if (openParenCount === 0) {
          myEndParenIndex = i + 1; // recurse the contents of the parentheses to search for nested ones

          result.push(pieval(input.substring(myOpenParenIndex + 1, i)));
        }
      }
    } // capture anything after the last parentheses


    if (input.length > myEndParenIndex) {
      result.push(input.substring(myEndParenIndex, input.length));
    } //console.log(cal(result))


    var response = cal(result);
    return result;
  }

  function cal(arr) {
    var calstr = "";

    for (var i = 0; i < arr.length; i++) {
      if (typeof arr[i] != "string") {
        if (cal(arr[i]) < 0) {
          arr[i] = "".concat(cal(arr[i]));
        } else {
          arr[i] = "".concat(cal(arr[i]));
        }
      }

      if (typeof arr[i] === "string") {
        calstr += arr[i];
      }

      if (i == arr.length - 1) {
        //console.log("cal" ,calstr,calculate(tokenize(calstr)) );
        return calculate(tokenize(calstr));
      }
    }
  }

  console.log(calculate(tokenize(pieval(output.innerText).join(""))));
  output.innerText = calculate(tokenize(pieval(output.innerText).join("")));
} // function handleLongInput() {
//     const input = document.getElementById("display");
//     if (input.length > 15){
//         ??
//     }
// }