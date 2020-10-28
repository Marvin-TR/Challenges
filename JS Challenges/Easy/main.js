var name1 = 'Lucy';
var name2 = 'Marvin';

var name1Length = name1.length;
var name2Length = name2.length;
var difference = Math.abs(name1Length - name2Length);

if (name1Length > name2Length) {
    console.log(`The name ${name1} is longer than ${name2} by ${difference} characters.`)
} else {
    console.log(`The name ${name2} is longer than ${name1} by ${difference} characters.`)
}