let nextBtn = document.querySelector(".next")
let prevBtn = document.querySelector(".prev")

nextBtn.addEventListener('click', function () {
    let items = document.querySelectorAll(".item")
    document.querySelector(".slide").appendChild(items[0])
})

prevBtn.addEventListener('click', function () {
    let items = document.querySelectorAll(".item")
    document.querySelector(".slide").prepend(items[items.length - 1])
})