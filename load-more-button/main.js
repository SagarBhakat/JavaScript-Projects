const productContainer = document.querySelector(".products-container");
const loadMoreButton = document.querySelector(".load-more-btn");


let currentStep = 0
async function fetchProduct(getCurrentStep) {
    const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${getCurrentStep ===0?0:getCurrentStep*10}`, { method: "GET" });
    const result = await response.json()
    if (result && result.products) displayProducts(result.products);
}



function displayProducts(listofProducts) {
    console.log(listofProducts);
    listofProducts.forEach(productitem => {
        const productItemWrapper = document.createElement("div");
        const productTitle = document.createElement("p");
        const productThumbnail = document.createElement("img");
        const productPrice = document.createElement("p");
        const productDescription = document.createElement("p");

        productTitle.textContent = productitem.title;
        productThumbnail.src = productitem.thumbnail;
        productPrice.textContent = productitem.price;
        productDescription.textContent = productitem.description;

        productItemWrapper.classList.add("product-item-wrapper");
        productTitle.classList.add("product-title");
        productThumbnail.classList.add("product-thumbnail");
        productPrice.classList.add("product-price");
        productDescription.classList.add("product-description");


        productItemWrapper.appendChild(productThumbnail);
        productItemWrapper.appendChild(productTitle);
        productItemWrapper.appendChild(productPrice);
        productItemWrapper.appendChild(productDescription);

        productContainer.appendChild(productItemWrapper);

    });
    if (productContainer.children.length === 50) {
        loadMoreButton.setAttribute("disabled", "true");
    }
    // console.log(productContainer.children.length);

}



fetchProduct(currentStep);

loadMoreButton.addEventListener("click", () => {
    fetchProduct(currentStep = +1);
})