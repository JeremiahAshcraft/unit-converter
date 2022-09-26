/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// Variables //

const unitInput = document.getElementById("unit-input")
const convertBtn = document.getElementById("convert-btn")
const lengthUnit = document.getElementById("length")
const volumeUnit = document.getElementById("volume")
const massUnit = document.getElementById("mass")

// EventListeners //

convertBtn.addEventListener('click', (event) => {

    let meterConversion = (unitInput.value * 3.281).toFixed(3)
    let feetConversion = (unitInput.value / 3.281).toFixed(3)

    lengthUnit.textContent = `${unitInput.value} Meters = ${meterConversion} Feet | ${unitInput.value} Feet = ${feetConversion} Meters`

    let literConversion = (unitInput.value * 0.264).toFixed(3)
    let gallonConversion = (unitInput.value / 0.264).toFixed(3)

    volumeUnit.textContent = `${unitInput.value} Liters = ${literConversion} Gallons | ${unitInput.value} Gallons = ${gallonConversion} Liters`

    let kilogramsConversion = (unitInput.value * 2.204).toFixed(3)
    let poundConversion = (unitInput.value / 2.204).toFixed(3)

    massUnit.textContent = `${unitInput.value} Kilograms = ${kilogramsConversion} Pounds | ${unitInput.value} Pounds = ${poundConversion} Kilograms`

})

// This function prevents input from accepting any keystrokes besides numbers. //

// Reads keystrong and associated UNICode //

unitInput.onkeypress = function (event) {

    // Variable assigned the conversion of keystroke UNICode to string and associated value of specific key //

    const uniString = String.fromCharCode(event.which)

    // String of numbers for keys I want to allow for the input. //

    const onlyNums = "1234567890"

    // Conditional returns the value of onlyNums at the index of uniString if it greater than zero. Since many keystrokes express a value that is not found in onlyNums (the value returned in this case will be -1), these keystrokes will return a boolean value of false and will not be expressed in the input field. 

    if (onlyNums.indexOf(uniString) < 0) {
        return false
    }
};