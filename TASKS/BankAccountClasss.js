class BankAccount{
    #accountId
    #accountTitle
    #balance
    #emailId
    constructor(){
        this.#accountId=accountId;
        this.#accountTitle=this.accountTitle;
        this.#balance=balance;
        this.#emailId=emailId;
    }
    set(id,title,balance,email){
        this.#accountId=id;
        this.#accountTitle=title;
        this.#balance=balance;
        this.#emailId=email;
    }
    getId(){
        return id
    }
    getTitle(){
        return title;
    }
    getBal(){
        return balance;
        }
    getEmail(){
        return email;
    }
    withdrawAmont(withdraw){
    return `${withdraw} has been withdrwan and remaining is ${this.balance-withdraw}`;

    }
    depositAmount(deposit){
        this.balance+=deposit;
        return `${deposit} has been added , Balance Now is ${this.balance}`;

    }

}

let waqar=new BankAccount(11,'fresh',12000,'waqar@waqar');
waqar.withdrawAmont(6000)