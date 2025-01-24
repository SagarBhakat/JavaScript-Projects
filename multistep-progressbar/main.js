const progress = document.querySelector(".progress");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const IconsWrapper = document.querySelectorAll(".icon-wrapper");
let currentSelectedStep = 1;

nextBtn.addEventListener("click", () => {
    if (currentSelectedStep < IconsWrapper.length) {
        currentSelectedStep++;
    }
    handleUpdateStep();
})


prevBtn.addEventListener("click", () => {
    if (currentSelectedStep > 1) {
        currentSelectedStep--;
    }

    handleUpdateStep();
})


function handleUpdateStep() {
    IconsWrapper.forEach((item, index) => {
        if (index < currentSelectedStep) {
            item.classList.add("active")
        } else {
            item.classList.remove("active")
        }
    });
    progress.style.width = ((currentSelectedStep - 1) / (IconsWrapper.length - 1)) * 100 + "%";
    if (currentSelectedStep === 1) {
        prevBtn.disabled = true;
    } else if (currentSelectedStep === IconsWrapper.length) {
        nextBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }
}