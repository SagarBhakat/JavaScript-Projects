const paginationListWrapper = document.querySelector(".pagination-list");

function createDummyData() {
    for (let i = 1; i <= 100; i++) {
        const li = document.createElement("li");
        li.textContent = `Card ${i}`
        paginationListWrapper.appendChild(li);
    }
}


createDummyData();

const paginationNumbers = document.querySelector(".pagination-numbers");
const extractAllListItems = document.querySelectorAll("li");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");


let paginationLimit = 10;
let pageCount = Math.ceil(extractAllListItems.length / paginationLimit);
let currentPage = 1;
// console.log(pageCount);


function createPageNumber(getCurrentIndex) {
    const pageNumber = document.createElement("button");
    pageNumber.classList.add("pagination-number");
    pageNumber.textContent = getCurrentIndex;
    pageNumber.setAttribute("page-index", getCurrentIndex);
    paginationNumbers.appendChild(pageNumber);

}


function createPaginationNumberButton() {
    for (let i = 1; i <= pageCount; i++) {
        createPageNumber(i);
    }
}

createPaginationNumberButton();

function handleCurrentPage(getCurrentPageNumber) {
    currentPage = getCurrentPageNumber;
    handleActiveCurrentPageNumber();
    handlePaginationButtonstatus();

    const getPreviousRange = (getCurrentPageNumber - 1) * paginationLimit;
    const getCurrentrange = getCurrentPageNumber * paginationLimit;

    extractAllListItems.forEach((Listitem, index) => {
        Listitem.classList.add("hide-list-item");
        if (index >= getPreviousRange && index < getCurrentrange) {
            Listitem.classList.remove("hide-list-item");


        }
    })


}

function handleActiveCurrentPageNumber() {
    document.querySelectorAll(".pagination-numbers").forEach((button) => {
        button.classList.remove("active-state");
        const getCurrentPageIndex = Number(button.getAttribute("page-index"));

        console.log(`Current Page Index: ${getCurrentPageIndex}`);
        console.log(`currentPage: ${currentPage}`);

        if (getCurrentPageIndex === currentPage) {
            button.classList.add("active-state");

        }


    })
}

function handlePaginationButtonstatus() {
    console.log(currentPage);
    if (currentPage === 1) {
        handleDisableButton(prevBtn);
    } else {
        handleEnableButton(prevBtn);
    }

    if (pageCount === currentPage) {
        handleDisableButton(nextBtn);
    } else {
        handleEnableButton(nextBtn);
    }
}

function handleDisableButton(getBtn) {
    getBtn.classList.add("disabled");
    getBtn.setAttribute("disabled", "true");
}


function handleEnableButton(getBtn) {
    getBtn.classList.remove("disabled");
    getBtn.removeAttribute("disabled");
}

prevBtn.addEventListener("click", () => {
    handleCurrentPage(currentPage - 1);
})

nextBtn.addEventListener("click", () => {
    handleCurrentPage(currentPage + 1);

})



document.querySelectorAll(".pagination-number").forEach((button) => {
    const getCurrentPageIndex = Number(button.getAttribute("page-index"));

    if (getCurrentPageIndex) {
        button.addEventListener("click", () => {
            handleCurrentPage(getCurrentPageIndex);

        });
    }
});