const addButton = document.querySelector(".add-btn");

addButton.addEventListener('click', function () {
    const inputValue = document.getElementById("input-task")
    const taskName = inputValue.value.trim()
    if (taskName == "") {
        console.log("please enter task");
    }
        const taskContainer = document.querySelector(".tasks-container")
        const ul = document.createElement("ul")
        const li = document.createElement("li")
        ul.appendChild(li)
    
})