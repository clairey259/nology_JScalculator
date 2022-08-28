/* 
onclick handle button press
handle long numbers
*/

function handleButtonPress(event) {
    const value = event.target.innerText;
    const output = document.getElementById("display");
    output.innerHTML = output.innerHTML + value;
} 

function handleButtonPressPosNeg() {
    const element = document.getElementById("display");
    let value = element.innerHTML;
    console.log (value)
    const valueInt = parseFloat(value);
    if (valueInt > 0 || value === ""){
        value = "-" + value;
    } else if (value < 0 || value === "-"){
        value = value.split("");
        value.shift();
        console.log(value)
        value = value.join("")
    } 
    element.innerHTML = value
}

function handleButtonPressClear(event) {
    const output = document.getElementById("display");
    output.innerHTML = ""
}

// function handleButtonPressEquals(event) {
//     const output = document.getElementById("display");
//     const value = output.innerHTML
//     output.innerHTML = eval(value)
// }

function handleButtonPressEquals(event) {
    const output = document.getElementById("display");
    const str = output.innerHTML;
    const compute = (str = '') => {
       let total = 0;
       str = str.match(/[+\−]*(\.\d+|\d+(\.\d+)?)/g) || [];
       while (str.length) {
          total += parseFloat(str.shift());
       };
       return total;
    };
    output.innerHTML = compute(str);
}



// function handleLongInput() {
//     const input = document.getElementById("display");
//     if (input.length > 15){
//         ??
//     }
// }