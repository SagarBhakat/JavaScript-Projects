const imageWrapper = document.querySelector(".images-wrapper");
const loadMoreBtn = document.querySelector(".load-more-btn");
let count = 1;

function fetchRandomImages(getCount) {
    for (let i = getCount; i <= getCount + 5; i++) {
        let imgElement = document.createElement("img");
        imgElement.src = `https://picsum.photos/300?random=${i}`;
        imageWrapper.appendChild(imgElement);

    }
}

fetchRandomImages(count);

loadMoreBtn.addEventListener("click", () => {
    fetchRandomImages((count += 5));
});