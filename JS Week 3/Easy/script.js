function exercise(activity) {
    return (function() {return`Today's excercise is ${activity}`})
}

var run = exercise('running');
console.log(run()); //shoves run into the function()
var swim = exercise('swimming');
console.log(swim());