const display = document.querySelector('.input')
const btn = document.querySelectorAll('#btn-container')
const hi = document.querySelector('#hi')
let number1 = ''
let number2 = ''
let operator = ''

function handleButtonClicks(buttons, display) {
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      let target = e.target.value

      if (target !== undefined) {
        operate(target)
      }
    })
  })
}

let arrOper = ['/', '*', '+', '-', '%', '+/-']

//so we have the operate function is called whenever we click on a button
//the returned value we get is either a digit or operator
//we need to check whether the return value is a digit or operator
//if it's a digit we need to concate the digits until the user enters an operator && store it in a variable for the first digit
//if its an operator we need to store the operator in a separate variable, also store the numbers of the first variable in the second variable, and finally set the first digit to being empty
//if the operator that's return is = check to see that num1,num2, & operator have values if so execute the switch statement
function operate(userInput) {
  let total = 0

  //stops consecutive operators from being entered
  let dis = display.value.slice(-1)
  //checks first to see if the previous & current input are operators
  if (arrOper.includes(dis) && arrOper.includes(userInput)) {
    console.log(dis)
    console.log(display.value)

    return display.value.slice(-1)
  }

  if (userInput === 'AC') {
    reset()
  }

  if (userInput === '.') {
    // Prevent multiple decimals in number1
    if (number1.includes('.')) {
      return // Stop adding another decimal
    }
  }

  if (userInput === '+/-') {
    number1 = -number1

    display.value = number1
  }

  if (
    userInput !== undefined &&
    userInput !== '/' &&
    userInput !== '=' &&
    userInput !== '-' &&
    userInput !== '*' &&
    userInput !== '+' &&
    userInput !== 'AC' &&
    userInput !== '%' &&
    userInput !== '+/-'
  ) {
    display.value += userInput

    number1 += userInput
  } else if (
    userInput !== '=' &&
    userInput !== 'AC' &&
    userInput !== '+/-' &&
    !operator
  ) {
    display.value += userInput

    operator = userInput
    number2 = number1
    number1 = ''
  }

  if (
    userInput === '=' ||
    (arrOper.includes(dis) && arrOper.includes(userInput))
  ) {
    console.log(`${number1} ${operator} ${number2} = ${total}`)

    if (number1 && number2 && operator) {
      switch (operator) {
        case '+':
          total = add(+number2, +number1)
          showResults(total)
          number1 = total
          operator = ''

          break
        case '-':
          total = subtract(+number2, +number1)
          showResults(total)
          number1 = total
          operator = ''

          break
        case '*':
          total = multiply(+number2, +number1)
          showResults(total)
          number1 = total
          operator = ''

          break
        case '/':
          total = divide(+number2, +number1)
          showResults(total)
          number1 = total
          operator = ''

          break
        case '%':
          total = remainder(+number2, +number1)
          showResults(total)
          number1 = total
          operator = ''

          break
      }
    }
  }
}

handleButtonClicks(btn, display)

function add(num1, num2) {
  return round(num1 + num2, 2)
}

function subtract(num1, num2) {
  return round(num1 - num2, 2)
}

function multiply(num1, num2) {
  return round(num1 * num2, 2)
}

function divide(num1, num2) {
  return round(num1 / num2, 2)
}

function remainder(num1, num2) {
  return round(num1 % num2, 2)
}

function showResults(result) {
  display.value = result
}

function round(num, decimalPlaces = 0) {
  var p = Math.pow(10, decimalPlaces)
  var n = num * p * (1 + Number.EPSILON)
  return Math.round(n) / p
}

function reset() {
  display.value = ''
  number1 = ''
  number2 = ''
  operator = ''
}
