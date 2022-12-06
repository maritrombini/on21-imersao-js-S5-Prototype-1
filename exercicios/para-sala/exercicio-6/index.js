//exercicios feitos pela profa aqui
/**Os métodos de Account são:

 credit(amount), que adiciona o valor especificado ao montante. Imprime na console o resultado.
 debit(amount), que subtrai o valor especificado do montante
 transferTo(anotherAccount, amount), que transfere o valor especificado desta conta para a outra conta (o parâmetro deve ser um objeto conta). Imprime na console o resultado. Caso não haja valor suficiente para a operação, ela deve retornar uma exceção com a mensagem especificada.
 
 */
function Account(accountNumber, agencyNumber, amount) {
  let account = Object.create(Account.prototype);

  account.accountNumber = accountNumber;
  account.agencyNumber = agencyNumber;
  account.amount = amount;

  return account;
}

Account.prototype.credit = function credit(amount) {
  this.amount += amount;
  console.log(`O saldo atual é de R$ ${this.amount}`)
};

Account.prototype.debit = function debit(amount) {
  this.amount -= amount;
  console.log(`O saldo atual é de R$ ${this.amount}`)
};

Account.prototype.transferTo = function transferTo(anotherAccount, amount) {
  if (this.amount < amount) {
    throw 'ERRO!! Saldo insuficiente.'
  }

  this.debit(amount)
  anotherAccount.credit(amount)
};

const account1 = Account(12345, 500, 1000)
const account2 = Account(67891, 501, 2000)

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


