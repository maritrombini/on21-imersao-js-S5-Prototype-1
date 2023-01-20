const { CreateType, damageDealtByType, damageTakenByType } = require('./type')
const { CreateAbilities, abilitiesByType } = require('./abilities')
const { CreateMove, moveByType } = require('./move')
const CreatePokemon = require('./pokemon')

const bulbasaur = new CreatePokemon('Bulbasaur', 1, [new CreateType('Grass', damageDealtByType.grass, damageTakenByType.grass), new CreateType('Poison', damageDealtByType.poison, damageTakenByType.poison)],
  [new CreateAbilities(abilitiesByType.overgrow.name, abilitiesByType.overgrow.summary, abilitiesByType.overgrow.effect)],
  [new CreateAbilities(abilitiesByType.chlorophyll.name, abilitiesByType.chlorophyll.summary, abilitiesByType.chlorophyll.effect)], { hp: 45, attack: 49, defense: 49, 's-attack': 65, 's-defense': 65, speed: 45 },
  [new CreateMove(moveByType.synthesis.name, moveByType.synthesis.type, moveByType.synthesis.summary, moveByType.synthesis.power, moveByType.synthesis.target, moveByType.synthesis.accuracy, moveByType.synthesis.priority),
  new CreateMove(moveByType.vine_whip.name, moveByType.vine_whip.type, moveByType.vine_whip.summary, moveByType.vine_whip.power, moveByType.vine_whip.target, moveByType.synthesis.accuracy, moveByType.vine_whip.priority),
  ], 'basic', 1, 16, 0, 'Robertinho')


// bulbasaur.move('Synthesis')
// bulbasaur.move('Vine Whip')
// bulbasaur.move('another move')

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