const slider = document.querySelector(".slider");
const dotContainer = document.querySelector(".dots_container");


async function fetchImages() {
    const response = await fetch("https://picsum.photos/v2/list?page1&limit=8", { method: "GET" }); //GET is not necessary. only for readability 
    const ImageList = await response.json();
    displayImage(ImageList);


}
fetchImages();

function displayImage(ListOfImages) {
    slider.innerHTML = ListOfImages.map((item) => `
    <div class="slide">
    <img src=${item.download_url} alt=${item.id}/>
    </div>`).join("");


    dotContainer.innerHTML = ListOfImages.map((item, index) => `
    <span class="dot ${index===0?'active':''}" data-slide=${index}></span>`).join("");

}



//slider functionality


setTimeout(() => {
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".left_button");
    const nextBtn = document.querySelector(".right_button");
    let currentSlide = 0;

    function activeDot(sldDt) {
        document.querySelectorAll(".dot").forEach((dotItem) => dotItem.classList.remove("active"));
        document.querySelector(`.dot[data-slide="${sldDt}"]`).classList.add("active");

    }

    function changeCurrentSlide(currentSlide) {
        slides.forEach((slideitem, index) =>
            slideitem.style.transform = `translateX(${100*(index-currentSlide)}%)`
        );

    }


    changeCurrentSlide(currentSlide);

    prevBtn.addEventListener("click", () => {
        currentSlide--;
        if (0 >= currentSlide) {
            currentSlide = 0;

        }
        changeCurrentSlide(currentSlide);
        activeDot(currentSlide);
    })


    nextBtn.addEventListener("click", () => {
        currentSlide++;
        if (slides.length - 1 < currentSlide) {
            currentSlide = 0;
        }
        activeDot(currentSlide);
        changeCurrentSlide(currentSlide);
    })

    dotContainer.addEventListener("click", (event) => {
        if (event.target.classList.contains("dot")) {
            const currentSlide = event.target.dataset.slide;
            changeCurrentSlide(currentSlide);
            activeDot(currentSlide);
        }

    })

}, 1000)