const QRcontainer = document.querySelector(".qr-container");
const qrTextInput = document.querySelector(".qr-text");
const generateQRBtn = document.querySelector(".generateQrcodeBtn");
const errorMessage = document.querySelector(".error-message");


generateQRBtn.addEventListener("click", () => {
    validateInputField();

})


qrTextInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        validateInputField();

    }

})

function validateInputField() {
    console.log(qrTextInput.value);
    if (qrTextInput.value.trim().length > 0) {
        generateQRcode();
    } else {
        errorMessage.textContent = "Please enter a valid input";
        QRcontainer.innerHTML = "";
    }
}

function generateQRcode() {
    QRcontainer.innerHTML = "";
    new QRCode(QRcontainer, {
        text: qrTextInput.value,
        width: 400,
        height: 400,
        colorLight: "#fff",
        colorDark: "#000",
    });

    qrTextInput.value = "";
    errorMessage.textContent = "";
}