let num1 = parseInt(prompt('Give me a number!'))
let num2 = parseInt(prompt('Give me another number!'))


function veryEasy() {
    switch (num1 > num2) {
        case true:
            return num2;

        case false:
            return num1;

        default:
            return "THEYRE THE SAME NUMBER!!!"
    }
}

console.log(veryEasy())


// ------------------------------------------------------------------


// function min() {
//     if (num1 > num2){
//         return num2
//     } else if (num1 < num2) { 
//         return num1
//     } else { 
//         return "THEYRE THE SAME NUMBER!!!";
//     }
// }

// console.log(min())

// ------------------------------------------------------------------

// function min() {
//     if (num1 === num2) {
//         return "THEYRE THE SAME NUMBER!!!"
//     } else {
//         return Math.min(num1, num2)
//     }
// }

// console.log(min())