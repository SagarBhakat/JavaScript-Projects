const changeThemeBtn = document.querySelector(".change-theme-btn");
const body = document.querySelector("body");

changeThemeBtn.addEventListener("click", () => {

    if (body.classList.contains("light")) {
        body.classList.remove("light")
        body.classList.add("dark")
    } else {
        body.classList.remove("dark")
        body.classList.add("light")
    }

})