const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".searchBtn");
const githubProfileDetails = document.querySelector(".github-profile-details");
const BASE_URL = "https://api.github.com/users/";
const loader = document.querySelector(".loader");

function showloader() {
    loader.classList.add("show");
    githubProfileDetails.classList.add("hide");

}

function removeLoader() {
    loader.classList.remove("show");
    githubProfileDetails.classList.remove("hide");

}

async function getGithubprofile() {
    showloader();
    const response = await fetch(`${BASE_URL}${searchInput.value}`);
    const result = await response.json();
    console.log(result);

    if (result) {
        removeLoader();
        displayGithubProfile(result);
        searchInput.value = "";
    }
}

searchBtn.addEventListener("click", getGithubprofile)

function displayGithubProfile(getProfileDetails) {
    const { login, avatar_url, name, location, public_repos, created_at } = getProfileDetails;
    githubProfileDetails.innerHTML = `
    <p>${login}</p>
    <img src=${avatar_url} alt=${login}>
    <p>Name: ${name}</p>
    <p>location: ${location}</p>
    <p>Public Repos: ${public_repos}</p>
    <p>Created at : ${created_at}<p>`
}