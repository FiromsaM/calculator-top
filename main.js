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
        // display.value += target
        operate(target)
      }
    })
  })
}

//so we have the operate function is called whenever we click on a button
//the returned value we get is either a digit or operator
//we need to check whether the return value is a digit or operator
//if it's a digit we need to concate the digits until the user enters an operator && store it in a variable for the first digit
//if its an operator we need to store the operator in a separate variable, also store the numbers of the first variable in the second variable, and finally set the first digit to being empty
//if the operator that's return is = check to see that num1,num2, & operator have values if so execute the switch statement
function operate(userInput) {
  // console.log(userInput)
  let total = 

  if (userInput === 'AC') {
    reset()
  }

  

  if (userInput === '.') {
    // Prevent multiple decimals in number1
    if (number1.includes('.')) {
      return // Stop adding another decimal
    }
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
  } else if (userInput !== '=' && userInput !== 'AC') {
    display.value += userInput

    operator = userInput
    number2 = number1
    number1 = ''
  }


  if (userInput === '=') {
    console.log(`${number1} ${operator} ${number2} = ${total}`)

    if (number1 && number2 && operator) {
      switch (operator) {
        case '+':
          total = add(+number2, +number1)
          showResults(total)
          number1 = total
          break
        case '-':
          total = subtract(+number2, +number1)
          showResults(total)
          number1 = total
          break
        case '*':
          total = multiply(+number2, +number1)
          showResults(total)
          number1 = total
          break
        case '/':
          total = divide(+number2, +number1)
          showResults(total)
          number1 = total
          break
        case '.':
          'Not set up yet'
          break
      }
    }
  }
}

handleButtonClicks(btn, display)

function add(num1, num2) {
  // console.log(`${num1} ${num2}`)
  // console.log(typeof num2)
  // console.log(typeof num1)
  // console.log(num1 + num2)
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

function showResults(result) {
  display.value = result
}

function reset() {
  display.value = ''
  number1 = ''
  number2 = ''
  operator = ''
}
