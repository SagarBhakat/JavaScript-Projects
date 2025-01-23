const userList = document.querySelector(".users-list");
const ScrollToBottomBtn = document.querySelector(".scroll-to-bottom-btn");
const ScrollToTopBtn = document.querySelector(".scroll-to-top-btn");

async function fetchUserData() {
    const response = await fetch("https://dummyjson.com/users?limit=100", {
        method: "GET"
    });
    const data = await response.json();
    console.log(data.users);
    displayData(data.users);

}



function displayData(getUsers) {

    userList.innerHTML = getUsers.map((userItem) =>
        `<li>
        <p>${userItem.firstName} ${userItem.lastName}</p>
        </li>`
    ).join("");


}

fetchUserData();


ScrollToTopBtn.addEventListener("click", () => {
    // window.scrollTo(0, 0);
    window.scrollTo({

            top: 0,
            behavior: "smooth"
        })
        // behavior: "smooth";

})

ScrollToBottomBtn.addEventListener("click", () => {
    console.log(document.body.scrollHeight);
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    })
})