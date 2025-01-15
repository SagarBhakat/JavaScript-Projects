//arrray of objects. Each object represents a question and answer pair. This is raw data that will be used to generate the accordion components. I may also be asked to fetch data from an API or other source in a real-world scenario, but for this project, I will use this static data.

const data = [

    {
        id: "1",
        question: "What are accordion components?",
        answer: "Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action.",
    }, {
        id: "2",
        question: "What are they used for?",
        answer: "They are commonly employed in various contexts, including FAQs, product descriptions, navigation menus, settings panels, and data tables, to save screen space and provide a structured and user-friendly interface for presenting information or options.",
    }, {
        id: "3",
        question: "Accordion as a musical instrument",
        answer: "The accordion is a musical instrument with a keyboard and bellows. It produces sound by air passing over reeds when the player expands or compresses the bellows, used in various music genres.",
    }, {
        id: "4",
        question: "Can I create an accordion component with a different framework?",
        answer: "Yes of course, it is very possible to create an accordion component with another framework.",
    },
];


const accordionWrapper = document.querySelector('.accordian');

function createAccordianData() {
    accordionWrapper.innerHTML = data.map(
        (dataItem) => `
      <div class='accodian_item'>
       <div class='accordian_question'>
        <h3>${dataItem.question}</h3>
        <i class="fa-solid fa-arrow-down"></i>
       </div>
       <div class="accordian_answer">
        <p>${dataItem.answer}</p>
       </div>
       
      </div>
        `).join(" ")

}

createAccordianData();

const accordianQuestions = document.querySelectorAll('.accordian_question');
accordianQuestions.forEach(currentQuestion => {
    currentQuestion.addEventListener("click", function(event) {
        if (currentQuestion.classList.contains("active")) {
            currentQuestion.classList.remove("active")
        } else {
            currentQuestion.classList.add("active")

        }

    })
})