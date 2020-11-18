// function iDontKnow(name, ssn) {
// 	var pii = {
// 		name,
// 		ssn
//     }
    
//     return (function getName() {
//         return pii.name
//     })
// }

// var marvin = iDontKnow('Marvin', 12345)
// console.log(marvin())


// function dontKnow(name, ssn) {
//     var pii = {
//         name,
//         ssn,
//         getName() {
// 			return this.name
// 		}
//     }
// }

// var marvin = dontKnow('Marvin', 12345)

// console.log(marvin.getName())




// function iDontKnow() {
//     return function pii(name, ssn) {
//         this.name = name;
//         this.ssn = ssn;

//         return function getName() {
//             return this.name
//         }
//     }
// }

// var person = iDontKnow()
// var marvin = person('Marvin', 12345)

// console.log(marvin())



function Person (name, ssn) {
	var pii = {
		name,
		ssn
	}
	this.getName = function () {
		return pii.name
    }
}
var marvin = new Person("Marvin", 54321);
console.log(marvin.getName());
