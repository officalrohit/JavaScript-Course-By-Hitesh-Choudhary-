const inputValue = document.querySelector('.input-task').value
const addButton = document.querySelector('.add-btn').addEventListener('click', function () {
    if (inputValue = "") {
        alert('please enter your task')
    } else {
        // const task = document.querySelector('.task').innerHTML += `<span>${inputValue}</span>`
        console.log(inputValue);
        
    }
})