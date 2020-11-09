var Tom = 
    {
        name: 'Tom',
        height: 9, //Inches
        mass: 8 //Pounds
    }


var Jerry = 
    {
        name: 'Jerry',
        height: centimetersToInches(10), //Centimeters
        mass: gramsToPounds(45) //Grams
    }


function centimetersToInches(centimeters) {
    return centimeters * 0.393701
}

function gramsToPounds(grams) {
    return grams * 0.00220462
}

function BMI(mass, height) {
    return mass / (height * height);
}

function checkingBMI() {
    if (BMI(Tom.mass, Tom.height) > BMI(Jerry.mass, Jerry.height)){
        return true
    } else {
        return false
    }
}

console.log(`Is Tom's BMI higher than Jerry's? ` + checkingBMI())
