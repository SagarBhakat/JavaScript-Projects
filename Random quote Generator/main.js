const quoteWrapper = document.querySelector(".quote-wrapper");
const refreshBtn = document.querySelector(".refresh-btn");
const loaderText = document.querySelector(".loader");

function showLoader() {
    loaderText.classList.add("show");
    quoteWrapper.classList.add("hide");

}

function removeLoader() {
    loaderText.classList.remove("show");
    quoteWrapper.classList.remove("hide");
}


async function fetchRandomQuote() {
    showLoader();
    const response = await fetch("https://api.kanye.rest/");
    const result = await response.json();
    if (result) {
        removeLoader();
        displayQuote(result);
    }

}

fetchRandomQuote();


function displayQuote(getQuote) {
    quoteWrapper.innerHTML = `
    <div class="quote-item">
    <p>${getQuote.quote}</p>
    </div>`

}

refreshBtn.addEventListener("click", () => {
    fetchRandomQuote();
})