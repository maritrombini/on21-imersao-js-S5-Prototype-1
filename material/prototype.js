function Animal(type, name, age) {
  const animal = Object.create(Animal.prototype)

  animal.type = type
  animal.name = name
  animal.age = age

}

Animal.prototype.dia = 'terça'

console.log(Animal.prototype.dia)