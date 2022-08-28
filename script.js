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

}

function handleButtonPressEquals(event) {

}

// function handleLongInput() {
//     const input = document.getElementById("display");
//     if (input.length > 15){
//         ??
//     }
// }