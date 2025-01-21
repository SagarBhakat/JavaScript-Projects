const modalBtn = document.querySelector(".openModal");
const modalBackground = document.querySelector(".modal-background");
const closeIcon = document.querySelector(".close-icon");
const closeBtn = document.querySelector(".close");

modalBtn.addEventListener("click", () => {
    modalBackground.style.display = "block";
})

closeIcon.addEventListener("click", () => {
    modalBackground.style.display = "none";
})

window.addEventListener("click", (event) => {
    console.log(event.target);
    if (event.target === modalBackground) {
        modalBackground.style.display = "none";
    }
})

closeBtn.addEventListener("click", () => {
    modalBackground.style.display = "none";
})