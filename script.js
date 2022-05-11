
"use strict";

//adding a list item

const listContainer = document.querySelector(".list-container")
const plusBtn = document.getElementById("plusBtn");

function addListItem(){
    const listItem = document.createElement("div")
    listItem.className = "listItem"
    listContainer.appendChild(listItem)
}


plusBtn.addEventListener("click", addListItem);



