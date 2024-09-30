const addBtn = document.querySelector(".add-btn")

addBtn.addEventListener('click', function () {
    const inputTask = document.querySelector(".input-task").value
    console.log(inputTask);
    const task = document.querySelector(".task").innerHTML = `<span>${inputTask}</span> <button class="delete"><i class="fa-solid fa-trash-can"></i></button>`
})

const deletetask = document.querySelector(".delete")

deletetask.addEventListener('click', function () {
    const task = document.querySelector(".task").textContent = ''
})