const categories = ['All', 'Men', 'Woman', 'Kids'];
const content = [{
    id: 'Men',
    label: 'Men shirt 1'
}, {
    id: 'Men',
    label: 'Men shirt 2'

}, {
    id: 'Men',
    label: 'Men shirt 3'
}, {
    id: 'Men',
    label: 'Men shirt 4'
}, {
    id: 'Men',
    label: 'Men shirt 5'
}, {
    id: 'Woman',
    label: 'Woman shirt 1'
}, {
    id: 'Woman',
    label: 'Woman shirt 2'

}, {
    id: 'Woman',
    label: 'Woman shirt 3'
}, {
    id: 'Woman',
    label: 'Woman shirt 4'
}, {
    id: 'Woman',
    label: 'Woman shirt 5'
}, {
    id: 'Kids',
    label: 'Kids shirt 1'
}, {
    id: 'Kids',
    label: 'Kids shirt 2'

}, {
    id: 'Kids',
    label: 'Kids shirt 3'
}, {
    id: 'Kids',
    label: 'Kids shirt 4'
}, {
    id: 'Kids',
    label: 'Kids shirt 5'
}];

const filterbtns = document.querySelector('.filter-buttons-wrapper');
const contentWrapper = document.querySelector(".content-wrapper");

function createCategory() {
    categories.forEach(category => {
        const buttonElement = document.createElement('button');
        buttonElement.innerText = category;
        buttonElement.classList.add('filter-btn');
        buttonElement.setAttribute('data-filter', category);

        filterbtns.appendChild(buttonElement);
    })
}

createCategory();

function createContent() {
    content.forEach((contentItem) => {
        const singleContentItem = document.createElement("div");
        singleContentItem.classList.add("card", contentItem.id);
        singleContentItem.textContent = contentItem.label;
        contentWrapper.appendChild(singleContentItem);

    })
}


createContent();

const allFilterBtns = document.querySelectorAll(".filter-btn");
const AllCards = document.querySelectorAll(".card");


allFilterBtns.forEach((singlefilterBtn) => {
    singlefilterBtn.addEventListener("click", () => {
        const extractCurrentCategory = singlefilterBtn.dataset.filter;
        console.log(extractCurrentCategory);

        filterCardsByCategory(extractCurrentCategory, AllCards);
    })

})

function filterCardsByCategory(extractCurrentCategory, allCards) {
    allCards.forEach((item) => {
        const isShowAllCards = extractCurrentCategory.toLowerCase() === "all";
        const isItemFiltered = !item.classList.contains(extractCurrentCategory);

        if (isItemFiltered && !isShowAllCards) {
            item.classList.add("hide");
        } else {
            item.classList.remove("hide");
        }
    });
}