class Person {
    constructor(name, job, age) {
        this.name = name;
        this.job = job;
        this.age = age;
    }

    excersice() {
        console.log("Running is fun! - said no one ever")
    }

    fetchJob() {
        console.log(`${this.name} is a ${this.job}`)
    }
}

class Programmer extends Person{
    constructor(name, job, age, languages){
        super(name, job, age);
        this.languages = languages;
        this.busy = true;
    }

    completeTask() {
        this.busy = false;
    }

    acceptNewTask() {
        this.busy = true;
    }

    offerNewTask() {
        if (this.busy) {
            console.log(`${this.name} cannot accept any more work right now!`)
        } else {
            console.log(`${this.name} can take more tasks right now!`)
        }
    }

    learnNewLanguage(newLanguage) {
        this.languages.push(newLanguage);
    }

    listLanguages() {
        console.log(this.languages)
    }
}

let Marvin = new Programmer('Marvin', 'Road to Hire Fellow', 19, ["HTML", "CSS", "JAVASCRIPT"])
console.log(Marvin.name)
Marvin.excersice()
Marvin.fetchJob()
Marvin.offerNewTask()
Marvin.completeTask()
Marvin.offerNewTask()
Marvin.learnNewLanguage("Python")
Marvin.listLanguages()

let Lucy = new Programmer('Lucy', 'Road to Hire TE', 19, ["HTML", "CSS", "JavaScript", "Node"])
console.log(Lucy.name)
Lucy.excersice()
Lucy.fetchJob()
Lucy.offerNewTask()
Lucy.completeTask()
Lucy.offerNewTask()
Lucy.learnNewLanguage("Go")
Lucy.listLanguages()

let Kiana = new Person('Kiana', 'Student', 17)
Kiana.excersice();
Kiana.fetchJob();