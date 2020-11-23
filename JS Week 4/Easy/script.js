var numbers = [1.5, 3, 2.5, 1];

let average = numbers.reduce(add, 0)/ numbers.length;

function add(total, num) {
    return total + num;
}

console.log(average)

