var ul = document.getElementById("list-container");
var inputbox = document.getElementById("input");

function add() {
    if (inputbox.value.trim() === "") {
        alert("Please enter a task.");
        return;
    }
    
    var listitem = document.createElement("li");
    listitem.innerHTML =`${inputbox.value} <button onclick='deleteItem(event)'>Delete</button>`;
    ul.append(listitem);
    inputbox.value = ""; // Clear the input box after adding
}
function deleteItem(event) {
    event.target.parentElement.remove();
}
