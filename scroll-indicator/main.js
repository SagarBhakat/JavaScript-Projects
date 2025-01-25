const postListContainer = document.querySelector(".posts-container");
const progressBar = document.querySelector(".progress-bar");

function fetchListOfpost() {
    fetch("https://dummyjson.com/posts", {
        method: "GET",
    }).then((response) => response.json()).then((result) => displayPostList(result.posts))
}

function displayPostList(getPost) {
    getPost.forEach((postItem) => {
        const postItemWrapper = document.createElement("div");
        postItemWrapper.classList.add("post-item-wrapper");

        const postTitle = document.createElement("label");
        postTitle.textContent = postItem.title;

        const postBody = document.createElement("p");
        postBody.textContent = postItem.body;

        const postTags = document.createElement("div");
        postTags.textContent = postItem.tags.map(tagItem => tagItem).join(",");
        postTags.classList.add("post-tags");

        postItemWrapper.appendChild(postTitle);
        postItemWrapper.appendChild(postBody);
        postItemWrapper.appendChild(postTags);

        postListContainer.appendChild(postItemWrapper);


    })

}

fetchListOfpost();

window.onscroll = function() {
    handleScroll();
};

function handleScroll() {
    // Get the number of pixels the document has already been scrolled vertically
    const getScrollFromTop = document.body.scrollTop || document.documentElement.scrollTop;
    // Calculate the total height of the document minus the height of the viewport
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    // Calculate the percentage of the document that has been scrolled
    const howMuchAlreadyScrolledpercentage = (getScrollFromTop / height) * 100;
    // Set the width of the progress bar to the calculated percentage
    progressBar.style.width = `${howMuchAlreadyScrolledpercentage}%`;

}