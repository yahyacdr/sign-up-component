let input = document.querySelectorAll('input')
let submit = document.querySelector('.submit')
let divInput = document.querySelectorAll('.input')
let errorIcon = document.querySelectorAll('input + img')
divInput = Array.from(divInput)
errorIcon = Array.from(errorIcon)
let inputs = Array.from(input)
let inputsArr = []
for (let i = 0; i < inputs.length; i++) {
    inputsArr[i] = new Object
    inputsArr[i].rate = inputs[i]
    inputsArr[i].clicked = false
}
inputs.forEach(function(input){
    input.onclick = function() {
        input.style.borderColor = 'hsl(248, 32%, 49%)'
        for (let i = 0; i < inputs.length; i++) {
            inputsArr[i].rate === input ?
            inputsArr[i].clicked = true :
            inputsArr[i].clicked = false
        }
        for (let i = 0; i < inputs.length; i++) {
            if (inputsArr[i].clicked === false) {
                inputsArr[i].rate.style.borderColor = 'rgba(192, 190, 202, 50%)'
            }
        }
    }
})
submit.onclick = function () {
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value === '') {
            inputs[i].style.borderColor = 'hsl(0, 100%, 74%)'
            if (inputs[i] === divInput[i].children[0]) {
                errorIcon[i].style.display = 'inline-block'
            }
        } else {
            inputs[i].style.borderColor = 'rgba(192, 190, 202, 50%)'
            errorIcon[i].style.display = 'none'
        }
    }
}