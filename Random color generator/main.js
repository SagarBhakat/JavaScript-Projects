const hexcolorContainer = document.querySelector(".hex_color_container");
const hexColorvalue = document.querySelector(".hex-color-value");
const hexButton = document.querySelector('.hex-button');
hexButton.addEventListener("click", () => {
    let characterSet = "0123456789ABCDEF";
    let hexColorOutput = "";
    for (let i = 0; i < 6; i++) {
        hexColorOutput += characterSet.charAt(Math.floor(Math.random() * characterSet.length));

    }

    console.log(hexColorOutput);

    hexColorvalue.textContent = `#${hexColorOutput}`;
    hexcolorContainer.style.backgroundColor = `#${hexColorOutput}`;
    hexButton.style.color = `#${hexColorOutput}`;
})


//RGB Color Generator


const rgbcolorbtn = document.querySelector("#rgb-btn");
const getInputRangeRed = document.querySelector("#red");
const getInputRangeBlue = document.querySelector("#blue");
const getInputRangeGreen = document.querySelector("#green");
const rgbColorContainer = document.querySelector(".rgb_color_container");
const hexCopyButton = document.querySelector(".hex-copy-btn")
const rgbCopyButton = document.querySelector(".rgb-copy-btn")
const rgbValue = document.querySelector(".rgb-value");


rgbcolorbtn.addEventListener("click", () => {
    let extractRedValue = getInputRangeRed.value;
    let extractBlueValue = getInputRangeBlue.value;
    let extractGreenValue = getInputRangeGreen.value;

    rgbValue.textContent = `rgb(${extractRedValue},${extractGreenValue},${extractBlueValue})`
    rgbColorContainer.style.backgroundColor = `rgb(${extractRedValue},${extractGreenValue},${extractBlueValue})`;



})


// copying to the clipboard

hexCopyButton.addEventListener("click", () => {
    navigator.clipboard.writeText(hexColorvalue.textContent)

    alert('copy hogya')
})

rgbCopyButton.addEventListener("click", () => {
    navigator.clipboard.writeText(rgbValue.textContent);
    alert('yeh bhi copy hogya')


})