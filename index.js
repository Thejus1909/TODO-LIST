const textarea = document.querySelector("#textarea");
const button = document.querySelector(".buttoninput");
const todolist = document.querySelector(".todolist");
const detailsBox = document.createElement("div");
detailsBox.classList.add("details-box");
document.body.appendChild(detailsBox);

button.addEventListener("click", addtodolistitem);

function addtodolistitem() {
    console.log("button clicked");
    console.log(textarea.value);

    if (textarea.value.trim() === '') return;

    const tododiv = document.createElement("div");
    const item = document.createElement("p");
    item.innerHTML = textarea.value;
    tododiv.appendChild(item);

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.addEventListener("click", (e) => {
        e.stopPropagation();  // Prevent the click event from triggering the showDetails function
        tododiv.remove();
    });

    tododiv.appendChild(deleteButton);
    tododiv.addEventListener("click", () => {
        showDetails(item.innerHTML);
    });

    todolist.appendChild(tododiv);

    console.log(tododiv);
    textarea.value = '';  // Clear the textarea after adding the item
}

function showDetails(text) {
    detailsBox.innerHTML = `<p>${text}</p>`;
    detailsBox.classList.add("active");
}
