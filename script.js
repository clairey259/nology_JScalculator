
function handleButtonPress(event) {
  const value = event.target.innerText;
  const output = document.getElementById("display");
  output.innerHTML = output.innerHTML + value;
}

function handleButtonPressPosNeg() {
  const element = document.getElementById("display");
  let value = element.innerHTML;
  console.log(value);
  const valueInt = parseFloat(value);
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
  const output = document.getElementById("display");
  output.innerHTML = "";
}

//  --- Works using eval() ---
//     function handleButtonPressEquals(event) {
//     const output = document.getElementById("display");
//     const value = output.innerHTML
//     output.innerHTML = eval(value)
// }

function handleButtonPressEquals(event) {
  const output = document.getElementById("display");
  function tokenize(s) {
    // --- Parse a calculation string into an array of numbers and operators
    const r = [];
    let token = "";
    for (const character of s) {
      if ("^*/+-".indexOf(character) > -1) {
        if (token === "" && character === "-") {
          token = "-";
        } else {
          r.push(parseFloat(token), character);
          token = "";
        }
      } else {
        token += character;
      }
    }
    if (token !== "") {
      r.push(parseFloat(token));
    }
    return r;
  }

  function calculate(tokens) {
    // --- Perform a calculation expressed as an array of operators and numbers
    const operatorPrecedence = [
      { "^": (a, b) => Math.pow(a, b) },
      { "*": (a, b) => a * b, "/": (a, b) => a / b },
      { "+": (a, b) => a + b, "-": (a, b) => a - b },
    ];
    let operator;
    for (const operators of operatorPrecedence) {
      const newTokens = [];
      for (const token of tokens) {
        if (token in operators) {
          operator = operators[token];
        } else if (operator) {
          newTokens[newTokens.length - 1] = operator(
            newTokens[newTokens.length - 1],
            token
          );
          operator = null;
        } else {
          newTokens.push(token);
        }
      }
      tokens = newTokens;
    }
    if (tokens.length > 1) {
      console.log("Error: unable to resolve calculation");
      return tokens;
    } else {
      return tokens[0];
    }
  }

  function pieval(input) {
    let openParenCount = 0;
    let myOpenParenIndex = 0;
    let myEndParenIndex = 0;
    const result = [];

    for (let i = 0; i < input.length; i++) {
      if (input[i] === "(") {
        if (openParenCount === 0) {
          myOpenParenIndex = i;

          // checking if anything exists before this set of parentheses
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
          myEndParenIndex = i + 1;

          // recurse the contents of the parentheses to search for nested ones
          result.push(pieval(input.substring(myOpenParenIndex + 1, i)));
        }
      }
    }

    // capture anything after the last parentheses
    if (input.length > myEndParenIndex) {
      result.push(input.substring(myEndParenIndex, input.length));
    }

    //console.log(cal(result))
    let response = cal(result);
    return result;
  }

  function cal(arr) {
    let calstr = "";
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] != "string") {
        if (cal(arr[i]) < 0) {
          arr[i] = `${cal(arr[i])}`;
        } else {
          arr[i] = `${cal(arr[i])}`;
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
  //console.log(calculate(tokenize(pieval(output.innerText).join(""))));
  output.innerText = calculate(tokenize(pieval(output.innerText).join("")));
}

function handleLongInput() {
  const input = document.getElementById("display");
  if (input.length > 15){
      
  }
}