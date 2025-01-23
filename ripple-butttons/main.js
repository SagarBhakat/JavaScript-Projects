const getAllBtns = document.querySelectorAll(".ripple-effect");
getAllBtns.forEach(btn => {
    btn.addEventListener("click", (event) => {
        console.log(event.clientX, event.target.offsetLeft, event.clientY, event.target.offsetTop);


        let xCoordinate = event.clientX - event.target.offsetLeft;
        let yCoordinate = event.clientY - event.target.offsetTop;


        let rippleElement = document.createElement("span");
        rippleElement.style.left = `${xCoordinate}px`;
        rippleElement.style.top = `${yCoordinate}px`;

        btn.appendChild(rippleElement);

        window.setTimeout(() => {
            rippleElement.remove()

        }, 500);

    })
})