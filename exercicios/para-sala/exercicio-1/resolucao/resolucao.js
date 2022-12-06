const employee = {}

employee.id = '1'
employee.firstName = 'Mariana'
employee.lastName = 'Trombini'
employee.salary = 7000.90
employee.raiseSalary = function raiseSalary(perc) {
  let newSalary = (perc * this.salary) + this.salary
  this.salary = newSalary
  return `New salary after ${perc}% increase = R$${this.salary.toFixed(2)}`
}

console.log(employee.raiseSalary(0.15)) //New salary after 15% = R$8051.03
