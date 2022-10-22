const animalMethods = {
  eat: function eat() {
    console.log(`${this.name} is eating.`)
  },
  sleep: function sleep(amount) {
    this.energy += amount
  }
}

function Animal(type, name, age) {
  const animal = {}

  animal.type = type
  animal.name = name
  animal.age = age
  animal.energy = 0

  animal.eat = animalMethods.eat

  animal.sleep = animalMethods.sleep

  return animal

}

const animal1 = Animal('fish', 'nemo', 2)
const animal2 = Animal('dog', 'horus', 8)

animal1.eat()
animal2.eat()

console.log(animal1.energy)
animal1.sleep(12)
console.log(animal1.energy)

console.log(animal2.energy)
animal2.sleep(9)
console.log(animal2.energy)

//console.log(animal1)
//console.log(animal2)
