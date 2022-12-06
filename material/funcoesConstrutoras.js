function Animal(type, name, age){
  const animal = {}

  animal.type = type
  animal.name = name
  animal.age = age

  animal.eat = function eat(){
    console.log(`o ${this.type} chamado ${this.name} está comendo`)
  }

  return animal
}

const dogHorus = Animal('dog', 'Horus', 8)
console.log(dogHorus)

const catSalem = Animal('cat', 'Salem', 7)
console.log(catSalem)