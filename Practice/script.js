const inputValue = document.querySelector('.input-task').value
const addButton = document.querySelector('.add-btn');

addButton.addEventListener('click', function () {
    if (inputValue == "") {
        alert('please enter your task')
    } else {
        const taskName = document.querySelector('.task').innerHTML += `<span>${inputValue}</span>`
    }
})