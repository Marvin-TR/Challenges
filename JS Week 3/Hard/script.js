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
