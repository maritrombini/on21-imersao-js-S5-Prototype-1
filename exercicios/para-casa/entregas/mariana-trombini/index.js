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