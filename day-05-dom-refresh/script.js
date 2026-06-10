const fruits = [
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon",
    "Grape",
    "Strawberry",
    "Blueberry",
    "Peach",

]


const title = document.querySelector('#main-title')
const description = document.querySelector('.description')
const button = document.querySelector('.change-btn')

const items = document.querySelectorAll('.item')

const oldTitle = document.querySelector('#title')

const box = document.querySelector('#box')

const statusText = document.querySelector('#status')
const buttonClick = document.querySelector('#click-btn')

const nameInput = document.querySelector('#name-input')
const output = document.querySelector('#output')

const form = document.querySelector('#signup-form')
const emailInput = document.querySelector('#email-input')
const formMessage = document.querySelector('#form-message')

const counterValue = document.querySelector('#counter-value')
const decreaseBtn = document.querySelector('#decrease-btn')
const increaseBtn = document.querySelector('#increase-btn')
const resetBtn = document.querySelector('#reset-btn')
const increaseFiveBtn = document.querySelector('#increase-five-btn')
const decreaseFiveBtn = document.querySelector('#decrease-five-btn')

const searchInput = document.querySelector('#search-input')
const fruitList = document.querySelector('#fruit-list')
const resutlCount = document.querySelector('#result-count')


const exeTitle = document.querySelector('#exe-title')
const changeTitleBtn = document.querySelector('#change-title-btn')

const exeNameInput = document.querySelector('#exe-name-input')
const namePreview = document.querySelector('#name-preview')

items.forEach((item) => {
    console.log(item.textContent)
})

oldTitle.textContent = 'New Title';

box.innerHTML = "<strong>Hello to you</strong>"

button.addEventListener('click', () => {
    console.log("button has been clicked")
})

buttonClick.addEventListener("click", (event) => {
    statusText.textContent = 'you clicked the button!'
    console.log(event.target)
})

nameInput.addEventListener("input", () => {
    output.textContent = nameInput.value
})

form.addEventListener("submit", (event) => {
    event.preventDefault()

    formMessage.textContent = `you've entered: ${emailInput.value}`
})


let count = 0

function updateCounter() {
    counterValue.textContent = count

    if(count > 0) {
        counterValue.style.color = "green"
    } else if (count < 0) {
        counterValue.style.color = "red"
    } else {
        counterValue.style.color = "black"
    }
}



increaseBtn.addEventListener("click", () => {
    count = count + 1
    updateCounter()
})

decreaseBtn.addEventListener("click", () => {
    count = count - 1
    updateCounter()
})

// decreaseBtn.addEventListener("click", () => {
//     if(count > 0) {
//         count = count - 1
//         updateCounter()
//     }
// })

resetBtn.addEventListener("click", () => {
    count = 0
    updateCounter()
})

increaseFiveBtn.addEventListener("click", () => {
    count = count + 5
    updateCounter()
})

decreaseFiveBtn.addEventListener("click", () => {
    count = count - 5
    updateCounter()
})


function renderFruits (fruitsToRender) {
    fruitList.innerHTML = ""

    fruitsToRender.forEach((fruit) => {
        const li = document.createElement("li")
        li.textContent = fruit
        fruitList.appendChild(li)
    })

    resutlCount.textContent = `${fruitsToRender.length} result(s) found`
}

renderFruits(fruits)

searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase()

    const filteredFruits = fruits.filter((fruit) => {
        return fruit.toLowerCase().includes(searchTerm)
    })

    renderFruits(filteredFruits)
})

changeTitleBtn.addEventListener("click", () => {
    exeTitle.textContent = "Exercise Heading changed!"
})

exeNameInput.addEventListener("input", () => {
    namePreview.textContent = `your name is ${exeNameInput.value}`
})