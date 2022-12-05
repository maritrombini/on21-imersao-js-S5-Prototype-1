const { TypeStatsDamage } = require('./type')
const { abilitiesByType } = require('./abilities')
const { MoveList} = require('./move')
const Pokemon = require('./pokemon')

const base_move = new MoveList()

base_move.addMove("Trombose_Atomica",{
  name: 'Trombose Atomica',
  type: TypeStatsDamage["grass"]["damage_dealt"],
  summary: 'Inflicts regular damage with no additional effect.',
  power: 45,
  accuracy: 100,
  target: ['selected'],
  priority: 10
})

const bulbasaur = new Pokemon(
  'Bulbasaur', 1, [
    TypeStatsDamage["grass"],
    TypeStatsDamage["poison"]
  ], 
  [
    abilitiesByType["overgrow"]
  ],
  [
    abilitiesByType["chlorophyll"]
  ], 
  { 
    hp: 45, attack: 49, defense: 49, 's-attack': 65, 's-defense': 65, speed: 45 
  },
  [
    base_move.getMove("synthesis"),
    base_move.getMove("vine_whip"),
    base_move.getMove("Trombose_Atomica")
  ], 
  'basic', 
  1, 
  16, 
  0, 
  'Robertinho'
)

console.log(bulbasaur)
// bulbasaur.train(1508)

// bulbasaur.evolve('Ivysaur', 16, new CreateType('Pika', damageDealtByType.grass, damageTakenByType.grass), new CreateAbilities('Water', 'Strengthens Grass moves to inflict 1.5× damage at 1/3 max HP or less.', 'When this Pokémon has 1/3 or less of its HP remaining, its Grass-type moves inflict 1.5× as much regular damage.'),
// new CreateAbilities(abilitiesByType.overgrow.name, abilitiesByType.overgrow.summary, abilitiesByType.overgrow.effect), { hp: 80, attack: 99, defense: 69, 's-attack': 35, 's-defense': 75, speed: 85 }, new CreateMove(moveByType.synthesis.name, moveByType.synthesis.type, moveByType.synthesis.summary, moveByType.synthesis.power, moveByType.synthesis.target, moveByType.synthesis.accuracy, moveByType.synthesis.priority))

// bulbasaur.train(3620)
// bulbasaur.evolve('Blastoise', 32)

// bulbasaur.train(150)
// bulbasaur.train(99)
// bulbasaur.train(2)
// bulbasaur.train(40)
// bulbasaur.train(5)
// bulbasaur.train(5)
// bulbasaur.train(5)
// bulbasaur.train(10)
// bulbasaur.train(40)
// bulbasaur.train(60)
// bulbasaur.train(500)
// bulbasaur.train(0)
// bulbasaur.train(-100)