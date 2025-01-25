const navbar = document.querySelector(".navbar");
let navtop = navbar.offsetTop;
window.onscroll = function() {
    handleStiickyNavbarOnScroll();
}

function handleStiickyNavbarOnScroll() {
    if (window.scrollY >= navtop) {
        navbar.classList.add("fix-navbar");
    } else {
        navbar.classList.remove("fix-navbar");
    }
}