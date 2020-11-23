let whiteBttn = document.getElementById("white-bttn");
let redBttn = document.getElementById("red-bttn");
let body = document.querySelector("body");

whiteBttn.addEventListener('click', clickW)
redBttn.addEventListener('click', clickR)

function clickR(event) {
    body.classList.remove('bgWhite')
    body.classList.add("bgRed")
};

function clickW(event) {
    body.classList.remove('bgRed')
    body.classList.add('bgWhite')
}