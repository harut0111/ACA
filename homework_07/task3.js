'user strict';

class Person {
    constructor(firstName, lastName, gender, age) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._gender = gender;
        this._age = age;
    }
    // setters
    set firstName(value) { this._firstName = value; }
    set lastName(value) { this._lastName = value; }
    set gender(value) { this._gender = value; }
    set age(value) { this._age = value; }
    // getters
    get firstName() { return this._firstName; }
    get lastName() { return this._lastName; }
    get gender() { return this._gender; }
    get age() { return this._age; }

    toString() {
        return `\nPerson:\n${this._firstName} ${this._lastName} ${this._gender} ${this._age}`;
    }
}

class Student extends Person {
    constructor(firstName, lastName, gender, age, programs = [''], year, fee) {
        super(firstName, lastName, gender, age);
        this._programs = programs;
        this._year = year;
        this._fee = fee;
    }
    // setters
    set programs(value = ['']) { this._programs = value; }
    set year(value) { this._year = value; }
    set fee(value) { this._fee = value; }
    // getters
    get programs() { return this._programs; }
    get year() { return this._year; }
    get fee() { return this._fee; }

    passExam(program = '', grade) {
        let idxOfProg = this._programs.indexOf(program);
        if (idxOfProg === -1) { 
            console.log('!change program name'); 
        } else {
            if (grade >= 40) {
                this._programs.splice(idxOfProg, 1);
            }
        }
        if (!this._programs.length) {
            this._year++;
        }
    }

    toString() { return `\nStudent:\n${this._programs} ${this._year} ${this._fee }`; }
}

//let student1 = new Student('fn', 'ln', 'male', 434, ['Math', 'Physics', 'Geography'], 5, 100);

class Teacher extends Person {
    constructor(firstName, lastName, gender, age, program = '', pay) {
        super(firstName, lastName, gender, age);
        this._program = program;
        this._pay = pay;
    }
    set program(value) { this._program = value; }
    set pay(value) { this._pay = value; }

    get program() { return this._program; }
    get pay() { return this._pay; }

    toString() { return `${this._program} ${this.pay}`; }
}

//let teacher1 = new Teacher('fn', 'ln', 'f', 45, 'Biology', 1111,);