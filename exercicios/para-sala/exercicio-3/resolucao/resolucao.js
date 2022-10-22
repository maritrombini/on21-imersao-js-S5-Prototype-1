function generateId() {
  let date = new Date().getTime();
  let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let r = (date + Math.random() * 16) % 16 | 0;
    date = Math.floor(date / 16);
    return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
  return uuid
}

function Employee(firstName, lastName, salary) {
  const employee = {}

  employee.id = generateId()
  employee.firstName = firstName
  employee.lastName = lastName
  employee.salary = salary
  employee.benefits = []
  employee.raiseSalary = function raiseSalary(perc) {
    let newSalary = (perc * this.salary) + this.salary
    this.salary = newSalary
    return `New salary after increase = R$${this.salary.toFixed(2)}`
  }
  employee.addBenefits = function addBenefits(benefit) {
    this.benefits.push(benefit)
    return `Employee ${this.firstName} has as benefits:${this.benefits}`
  }
  employee.removeBenefits = function removeBenefits(benefit) {
    const index = this.benefits.indexOf(benefit)
    this.benefits.splice(index, 1)
    return `List of benefits: ${this.benefits}`
  }
  employee.listBenefits = function listBenefits() {
    return `List of benefits: ${this.benefits}`
  }
  return employee
}

const employee = Employee('Mari', 'Trombini', 7000)
console.log(employee.raiseSalary(0.15))
employee.addBenefits('VA')
employee.addBenefits('VR')
employee.addBenefits('13')
console.log(employee.listBenefits())
employee.removeBenefits('VA')
console.log(employee.listBenefits())
console.log(employee)
