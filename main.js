const display = document.querySelector('.input')
const btn = document.querySelectorAll('#btn-container')

let num1
let num2
let operator

let digits = btn.forEach((button) => {
  button.addEventListener('click', (e) => {
    console.log(e.target)
    if (e.target.value === undefined) {
      display.value = ''
    } else {
      display.value += e.target.value
    }
  })
})

console.log(digits)

function add(num1, num2) {
  return num1 + num2
}

function subtract(num1, num2) {
  return num1 - num2
}

function multiply(num1, num2) {
  return num1 * num2
}

function divide(num1, num2) {
  return num1 / num2
}

function operate(num1, operator, num2) {
  switch (operator) {
    case '+':
      add(num1, num2)
      break
    case '-':
      subtract(num1, num2)
      break
    case '*':
      multiply(num1, num2)
    case '/':
      divide(num1, num2)
      break
    case '.':
      'Not set up yet'
      break
  }
}
