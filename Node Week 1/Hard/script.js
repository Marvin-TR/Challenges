const express = require('express');
var app = express();
var data = require("./employees.json");

app.get("/employees", (req, res) => {
    res.send(data)
})

app.get("/employees/:Id", (req, res) =>{
    const findPerson = data.employees.find((person) => {
        return parseInt(req.params.Id) === person.employeeID
    })

    if (!findPerson) {
        res.status(404).send('Could not find them')
    }
    res.send(findPerson)
})

app.listen(3000, () =>{
    console.log("App is running on port 3000")
})