const addButton = document.querySelector(".add-btn")

addButton.addEventListener('click', function () {
    const inputTask = document.querySelector(".input-task").value
    console.log(inputTask);
    const taskContainer = document.querySelector(".tasks-container").innerHTML = (`<div class="task"><span>${inputTask}</span><button class="delete-btn">delete</button>`)
    
})