const inputBox = document.querySelector(".input");
const addButton = document.querySelector(".addbtn");
const notesListWrapper = document.querySelector(".notes-list-wrapper");
const errorMessageText = document.querySelector(".error-message-text");

function addNewNote() {
    const extractInputText = inputBox.value.trim();
    console.log(extractInputText);
    if (extractInputText.length <= 0) {
        errorMessageText.textContent = "input cant be empty";
        return false;
    }

    const newNoteItem = createNewNoteItem(extractInputText);
    notesListWrapper.appendChild(newNoteItem);
    inputBox.value = "";
    saveNotesToStorage(extractInputText);
}

function createNewNoteItem(getCurrentNote) {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = getCurrentNote;
    li.appendChild(p);


    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.classList.add("btn", "editBtn");
    li.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("btn", "deleteBtn");
    li.appendChild(deleteBtn);

    return li;
}

function saveNotesToStorage(getCurrentNote) {
    let notesList;
    if (localStorage.getItem("notes") === null) {
        notesList = [];
    } else {
        notesList = JSON.parse(localStorage.getItem("notes"));
    }

    notesList.push(getCurrentNote);
    localStorage.setItem("notes", JSON.stringify(notesList));
    console.log("notes saved to local storage", notesList);

}


function fetchAllNotes() {
    let notesList;
    if (localStorage.getItem("notes" === null)) {
        notesList = [];

    } else {
        notesList = JSON.parse(localStorage.getItem("notes"));
        notesList.forEach(noteItem => {
            const extractLi = createNewNoteItem(noteItem);
            notesListWrapper.appendChild(extractLi);
        })
    }
}



addButton.addEventListener("click", addNewNote);
document.addEventListener("DOMContentLoaded", fetchAllNotes)