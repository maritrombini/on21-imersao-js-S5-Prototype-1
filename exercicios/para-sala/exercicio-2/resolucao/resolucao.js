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


  return employee
}

const employee = Employee('Mari', 'Trombini', 8000)
console.log(employee)
/*
{
  id: 'a881aed0-d2a0-44e8-a648-bbac4a4a089f',
  firstName: 'Mari',
  lastName: 'Trombini',
  salary: 8000
}
 m */
