const express = require('express');
const app = express();
const Joi = require('joi');
const data = require('./employees.json');
app.use(express.json());

app.get('/employees', (req, res) =>{
    res.send(data);
})

app.get('/employees/:id', (req, res) => {
    let findEmployee = data.employees.find(employee => employee.employeeID === parseInt(req.params.id));
    if (!findEmployee){
        res.status(404).send("They dont exist " + res.statusCode);
    } 
    res.send(findEmployee);
})

app.delete('/employees/:id', (req, res) =>{
    let findEmployee = data.employees.find(employee => employee.employeeID === parseInt(req.params.id))
    if(!findEmployee){
        res.status(404).send("They dont exist  " + res.statusCode);
    }

    const index = data.employees.indexOf(findEmployee);
    data.employees.splice(index, 1);
    res.send(findEmployee);
})

app.post('/employees', (req, res) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        department: Joi.string().required(),
        salary: Joi.number().required()
    })

    const results = schema.validate(req.body);

    if(results.error) {
        res.status(400).send(`Name, Department, and salary are required, Thanks`)
    }


    
    const newPerson = {
        employeeID: data.employees.length + 1,
        name: req.body.name,
        department: req.body.department,
        salary: req.body.salary
    }

    data.employees.push(newPerson);
    res.send(newPerson);
})

app.put('/employees/:id', (req, res) => {
    let findEmployee = data.employees.find(employee => employee.employeeID === parseInt(req.params.id))
    if(!findEmployee){
        res.status(404).send("They dont exist  " + res.statusCode);
    }

    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        department: Joi.string().required(),
        salary: Joi.number().required()
    })

    const results = schema.validate(req.body);

    if(results.error) {
        res.status(400).send(`Name, Department, and salary are required, Thanks`)
    }

    findEmployee.name = req.body.name;
    findEmployee.department = req.body.department;
    findEmployee.salary = req.body.salary;

    res.send(findEmployee)
})





const port = 3000

app.listen(port, ()=> {
    console.log(`App is listening on port: ${port}`)
})