'user strict';

class Account {
    constructor(id, name, balance) {
        this._id = id;
        this._name = name;
        this._balance = balance;
    }
    // setters
    set name(value) { this._name = value; }
    set balance(value) { this._balance = value; }
    // gettere
    get id() { return this._id; }
    get name() { return this._name; }
    get balance() { return this._balance; }
    // methods
    credit(amount) {
        this._balance += amount;
        return this._balance;
    }

    debit(amount) {
        if (amount < this._balance) {
            this._balance -= amount;
        } else {
            console.log('Amount exceeded balance');
        }
    }

    transferTo(anotherAccount, amount) {
        if (amount < this._balance) {
            this._balance -= amount;
            anotherAccount.credit(amount);
        } else {
            console.log('Amount exceeded balance');
        }
    }

    static identifyAccounts(accountFirst, accountSecond) {
        for (const key in accountFirst) {
            if (accountFirst[key] !== accountSecond[key]) {
                return false;
            }
        }
        return true;
    }

    toString() {
        return `\nAccount\n${this._id}\n${this._name}\n${this._balance}`;
    }
}
