'user strict';

class Author {
    constructor(name, email, gender) {
        this._name = name;
        this._email = email;
        this._gender = gender;
    }
    set name(value) { this._name = value; }
    set email(value) { this._email = value; }
    set gender(value) { this._gender = value; }

    get name() { return this._name; }
    get email() { return this._email; }
    get gender() { return this._gender; }

    toString() { return `author: ${this._name} ${this._email} ${this._gender}`; }
}

let Sevak = new Author('Սևակ', 'psevak@gmail.com', 'male');

class Book {
    constructor(title, author, price, quantity) {
        this._title = title;
        this._author = author;
        this._price = price;
        this._quantity = quantity;
    }
    set title(value) { this._title = value; }
    set author(value) { this._author = value; }
    set price(value) { this._price = value; }
    set quantity(value) { this._quantity = value; }

    get title() { return this._title; }
    get author() { return this._author; }
    get price() { return this._price; }
    get quantity() { return this._quantity; }

    getProfit() { return this._price * this._quantity; }
    toString() { return `Book: ${this._title} ${this._author.name} ${this._price} ${this._quantity}` }
}
// test
let book1 = new Book('Անլռելի Զանգակատուն', Sevak, 254, 10);

let r1 = book1.title;
let r2 = book1.author.toString();
let r3 = book1.price;
let r4 = book1.quantity;
let r5 = book1.getProfit();
let r6 = book1.toString();
console.log(`${r1}\n${r2}\n${r3}\n${r4}\n${r5}\n${r6}\n`);

book1.title = 'Վերջին Խոսք';
book1.author = new Author('Չարենց', 'echarents@gmail.com', 'MALE');
book1.price = 354;
book1.quantity = 100;

r1 = book1.title;
r2 = book1.author.toString();
r3 = book1.price;
r4 = book1.quantity;
r5 = book1.getProfit();
r6 = book1.toString();
console.log(`${r1}\n${r2}\n${r3}\n${r4}\n${r5}\n${r6}\n`);