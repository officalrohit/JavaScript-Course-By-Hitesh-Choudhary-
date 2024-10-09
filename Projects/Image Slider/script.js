const nextBtn = document.querySelector(".next")
const prevBtn = document.querySelector(".prev")

nextBtn.addEventListener('click', function () {
    const items = document.querySelectorAll(".item")
    document.querySelector(".slide").appendChild(items[0])
})