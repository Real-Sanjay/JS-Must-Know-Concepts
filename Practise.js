class Bank {
    balance;

    constructor(balance) {
        this.balance = balance;
    }

    deposit(balance) {
        this.balance += balance;
    }

    getBalance() {
        return this.balance;
    }
}

const account = new Bank(1000);
account.deposit(100);
console.log(account.getBalance());
console.log(account.balance);