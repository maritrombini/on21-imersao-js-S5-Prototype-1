/**Os métodos de Account são:

 credit(amount), que adiciona o valor especificado ao montante. Imprime na console o resultado.
 debit(amount), que subtrai o valor especificado do montante
 transferTo(anotherAccount, amount), que transfere o valor especificado desta conta para a outra conta (o parâmetro deve ser um objeto conta). Imprime na console o resultado. Caso não haja valor suficiente para a operação, ela deve retornar uma exceção com a mensagem especificada.
 
 */
function Account(number, agency, balance) {
  let account = Object.create(Account.prototype);

  account.number = number;
  account.agency = agency;
  account.balance = balance;

  return account;
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
    this.debit(amount)
    anotherAccount.credit(amount)
    console.log(`Origin account balance after transfer = $${this.balance}, Destination account balance after transfer = $${anotherAccount.balance}`)
  } catch (err) {
    console.log(err.message)
  }
};

const account1 = Account(12345, 500, 1000)
const account2 = Account(67891, 501, 1000)

// account1.credit(1000)
// console.log(account1.balance)
//---------------------------------

// account2.credit(1000)
// console.log(account2.balance)
//---------------------------------

// account1.debit(150)
// console.log(account1.balance)
//---------------------------------

// account2.debit(350)
// console.log(account2.balance)
//---------------------------------

// account1.transferTo(account2, 100)
// account2.transferTo(account1, 100)
// account1.transferTo(account2, 60000)
// account2.transferTo(account1, 60000)


