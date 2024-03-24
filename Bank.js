class Customer {
    constructor(name, address, phone, email) {
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.accounts = [];
    }

    verify(name, address, phone, email) {
        return this.name === name && this.address === address && this.phone === phone && this.email === email;
    }

    getAccounts() {
        return this.accounts;
    }

    createAccount(account) {
        this.accounts.push(account);
    }

    toString() {
        return `ชื่อ: ${this.name}\nที่อยู่: ${this.address}\nเบอร์โทร: ${this.phone}\nอีเมลล์: ${this.email}`;
    }
}

class Account {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.transactions = [];
        this.customer = null; 
    }

    deposit(amount) {
        console.log(`การฝากเงิน ${amount} เข้าไปที่บัญชี ${this.accountNumber}`);
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            console.log(`การถอน ${amount} จากบัญชี ${this.accountNumber}...`);
            this.balance -= amount;
        } else {
            console.error("เงินไม่เพียงพอ");
        }
    }

    createTransaction(transactionId, transactionType, amount, transactionDate, status) {
        console.log(`สร้างธุรกรรม ${transactionId} ประเภท ${transactionType}`);
        const transaction = new Transaction(transactionId, transactionType, amount, transactionDate, status);
        this.transactions.push(transaction);
    }

    getTransaction() {
        return this.transactions;
    }

    getBalance() {
        return this.balance;
    }

    getCustomer() {
        return this.customer; 
    }

    setCustomer(customer) {
        this.customer = customer; 
    }

    getAccountType() {
        return this.accountType;
    }

    setAccountType(accountType) {
        this.accountType = accountType;
    }
}

class Transaction {
    constructor(transactionId, transactionType, amount, transactionDate, status) {
        this.transactionId = transactionId;
        this.transactionType = transactionType;
        this.amount = amount;
        this.transactionDate = transactionDate;
        this.status = status;
    }

    getTransactionId() {
        return this.transactionId;
    }

    getTransactionType() {
        return this.transactionType;
    }

    getAmount() {
        return this.amount;
    }

    getTransactionDate() {
        return this.transactionDate;
    }

    getStatus() {
        return this.status;
    }

    setStatus(status) {
        this.status = status;
    }

    setTransactionType(transactionType) {
        this.transactionType = transactionType;
    }

    setAmount(amount) {
        this.amount = amount;
    }

    setTransactionDate(transactionDate) {
        this.transactionDate = transactionDate;
    }
}

class CurrentAccount extends Account {
    constructor(accountNumber, balance, overdraftLimit, overdraftInterest) {
        super(accountNumber, balance);
        this.overdraftLimit = overdraftLimit;
        this.overdraftInterest = overdraftInterest;
    }

    calculateInterest() {
        if (this.balance < 0) {
            const interest = Math.abs(this.balance) * this.overdraftInterest;
            console.log(`คำนวณดอกเบี้ยเงินที่เกิน: ${interest}`);
            return interest;
        } else {
            console.log(`ไม่มีดอกเบี้ยเนื่องจากยอดคงเหลือไม่ติดลบ`);
            return 0;
        }
    }

    getOverdraftLimit() {
        return this.overdraftLimit;
    }

    setOverdraftLimit(overdraftLimit) {
        this.overdraftLimit = overdraftLimit;
    }
}

class SavingAccount extends Account {
    constructor(accountNumber, balance, interestRate) {
        super(accountNumber, balance);
        this.interestRate = interestRate;
    }

    calculateInterest() {
        const interest = this.balance * this.interestRate;
        console.log(`คำนวณดอกเบี้ย: ${interest}`);
        return interest;
    }

    getInterestRate() {
        return this.interestRate;
    }

    setInterestRate(interestRate) {
        this.interestRate = interestRate;
    }
}

class Bank {
    constructor(name, address, code) {
        this.name = name;
        this.address = address;
        this.code = code;
    }

    manage() {
        console.log("การจัดการของธนาคาร");
    }

    maintain() {
        console.log("ดูแลระบบธนาคาร");
    }

    verify() {
        console.log("ตรวจสอบธนาคาร");
    }

    openAccount() {
        console.log("เปิดบัญชี");
    }

    closeAccount() {
        console.log("ปิดบัญชี");
    }

    createTransaction() {
        console.log("กำลังทำธุรกรรม");
    }

    createCustomer() {
        console.log("กำลังสร้างลูกค้าใหม่");
    }

    createATM() {
        console.log("กำลังสร้้างATM");
    }

    createAccount(accountNumber, balance) {
        console.log(`กำลังสร้างบัญชี ${accountNumber}  ${balance}`);
        return new Account(accountNumber, balance);
    }
}

class ATM {
    constructor(location, manageBy) {
        this.location = location;
        this.manageBy = manageBy;
    }

    identify() {
        console.log("กำลังระบุตัวตนผู้ใช้");
    }

    checkBalance(account) {
        console.log(`ตรวจสอบเงินคงเหลือ ${account.accountNumber}`);
        return account.getBalance();
    }

    withdraw(account, amount) {
        console.log(`ถอนเงิน ${amount} จากบัญชี ${account.accountNumber}`);
        account.withdraw(amount);
    }

    deposit(account, amount) {
        console.log(`ฝากเงิน ${amount} ไปยังบัญชี ${account.accountNumber}`);
        account.deposit(amount);
    }

    changePin() {
        console.log("เปลี่ยนรหัส");
    }

    transfer() {
        console.log("");
    }

    verify() {
        console.log("");
    }
}

const main = () => {
    // สร้างธนาคาร
    const bank = new Bank('SeNpru', 'Npru', '12345');
    
    // สร้างลูกค้าแรก
    const customer1 = new Customer('Burit', 'Banpong', '1234567890', 'BuritZa007@hotmail.com');
    
    // สร้างลูกค้าที่สอง
    const customer2 = new Customer('Anna', 'Berlin', '0987654123', 'Annajak@gmail.com');

    // สร้างบัญชีให้กับลูกค้าแรก
    const account1 = bank.createAccount("ออมทรัพย์", 10000);

    // สร้างบัญชีให้กับลูกค้าที่สอง
    const account2 = bank.createAccount("ออมทรัพย์", 100000);

    // แสดงข้อมูลลูกค้าแรก
    console.log(customer1.toString());

    // เพิ่มบัญชีให้กับลูกค้าแรก
    customer1.createAccount(account1);
    // การฝากเงิน
    account1.deposit(200);
    // การถอนเงิน
    account1.withdraw(100);
    // แสดงยอดเงินคงเหลือ
    console.log(`ยอดเงินคงเหลือ: ${account1.getBalance()}\n----------------------`);

    // แสดงข้อมูลลูกค้าที่สอง
    console.log(customer2.toString());
    // เพิ่มบัญชีให้กับลูกค้าที่สอง
    customer2.createAccount(account2);
    // การฝากเงิน
    account2.deposit(300);
    // การถอนเงิน
    account2.withdraw(50);
    // แสดงยอดเงินคงเหลือ
    console.log(`ยอดเงินคงเหลือของลูกค้าที่สอง: ${account2.getBalance()}`);
}

main();



