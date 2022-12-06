// const animal = {
//   type: 'cachorro',
//   name: 'Hórus',
//   age: 7,
//   hobbies: ['comer', 'brincar', 'correr atrás de motos'],
//   'can I have': true,
//   eat: function eat(){
//     //...
//   }
// }


function eat(){
  console.log('O cachorro está comendo.')
}

const animal = {}

animal.type = 'cachorro'
animal.name = 'Aslam'
animal.age = 3
animal.hobbies = ['comer', 'brincar', 'correr atrás de motos'],
animal['can I have'] = true,
animal.eat = eat
animal.hobby1 = animal.hobbies[0]
animal.play = function play(){
  console.log( `O primeiro hobby é ${this.hobbies[0]}`)
}

// animal.hobbies[2] correr atrás de motos
//animal.hobby1 comer
// animal.eat()
// animal.name //O cachorro está comendo.
// animal.email // Aslam
// animal.eat [Function: eat]
//console.log(animal.play())