const addButton = document.querySelector(".add-btn");

addButton.addEventListener('click', function () {
	const inputValue = document.querySelector(".input-task")
	const taskName = inputValue.value.trim()
	if (taskName == "") {
		alert("please enter your task")
	}else {
		const taskContainer = document.querySelector(".tasks-container")
		const createUl = document.createElement("ul")
		taskContainer.appendChild(createUl)
		const createLi = document.createElement("li")
		createUl.appendChild(createLi)
		createLi.innerHTML = taskName
		inputValue.value = ""
		const deleteBtn = document.createElement("button")
		createUl.appendChild(deleteBtn)
		deleteBtn.innerHTML = "Delete"
		deleteBtn.addEventListener('click', function () {
			createUl.remove()
		})
	}
})

