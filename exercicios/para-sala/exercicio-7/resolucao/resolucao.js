function Account(bankCode, number, agency) {

  this.bankCode = bankCode
  this.number = number;
  this.agency = agency;
  this.balance = 1000;

}

Account.prototype.credit = function credit(amount) {
  return this.balance += amount;
};

Account.prototype.debit = function debit(amount) {
  return this.balance -= amount;
};

Account.prototype.transferTo = function transferTo(anotherAccount, amount) {
  if (this.balance < amount) {
    throw new Error('Insufficient balance. Transfer denied.')
  }
  try {
    if (this.bankCode !== anotherAccount.bankCode) {
      let tax = 1.1
      this.balance -= (amount * tax)
      anotherAccount.balance += amount
      console.log(`Origin account balance after transfer = $${this.balance}, Destination account balance after transfer = $${anotherAccount.balance}`)
    } else {
      this.balance -= amount
      anotherAccount.balance += amount
      console.log(`Origin account balance after transfer = $${this.balance}, Destination account balance after transfer = $${anotherAccount.balance}`)
    }
  } catch (err) {
    console.log(err.message)
  }
};

Account.prototype.close = function close() {
  this.balance <= 0 ? console.log('Account closed') :
    console.log('Account has remaining balance and cannot be closed')
};

const account1 = new Account(107, 12345, 500)
const account2 = new Account(117, 67891, 501)

// account1.credit(1000)
// console.log(account1.balance)
//---------------------------------

// account2.credit(1000)
// console.log(account2.balance)
//---------------------------------

// account1.debit(1000)
// console.log(account1.balance)
//---------------------------------

// account2.debit(1000)
// console.log(account2.balance)
//---------------------------------

account1.transferTo(account2, 100)
// account2.transferTo(account1, 100)
// account1.transferTo(account2, 60000)
// account2.transferTo(account1, 60000)

//account1.close()

/*
Transferências entre bancos com o número diferente devem cobrar uma taxa (definida por você) na transferência.

Crie um outro método para encerrar a conta. Caso a conta possua saldo não é possível encerra-la.  */