var num1String = window.prompt('Tell me your first number!')
var num2String = window.prompt('Tell me your second number!')
var operator = window.prompt('What do you want to do with these two numbers? (hint: add/+, subtract/-, multiply/*, or divide//')

var num1 = Number(num1String)
var num2 = Number(num2String)

function add() {
    var added = num1 + num2 
    console.log(`${num1} + ${num2} = ${added}`)
}

function subtract() {
    var subtracted = num1 - num2
    console.log(`${num1} - ${num2} = ${subtracted}`)
}

function multiply() {
    var multiplied = num1 * num2
    console.log(`${num1} * ${num2} = ${multiplied}`)
}

function divide() {
    var divided = num1 / num2
    console.log(`${num1} / ${num2} = ${divided}`)
}

if (operator === "+" || operator == "add") {
    add()
} else if (operator === "-" || operator == "subtract") {
    subtract()
} else if (operator === "*" || operator === "multiply") {
    multiply()
} else if (operator === "/" || operator === "divide") {
    divide()
}