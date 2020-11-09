var sentence = prompt("Tell me something!")

if (sentence === sentence.toUpperCase()) {
    console.log("SHHHH why you yelling?")
} else if (sentence === sentence.toLowerCase()) {
    console.log("Speak up, I cant hear you if you're whispering")
} else {
    console.log("Thanks for speaking normally")
}