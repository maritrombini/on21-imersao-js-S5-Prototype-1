const { CreateType, damageDealtByType, damageTakenByType } = require('./type')

const moveByType = {
  synthesis:
  {
    name: 'Synthesis',
    type: damageDealtByType.grass,
    summary: 'Heals the user by half its max HP. Affected by weather.',
    power: null,
    accuracy: null,
    target: ['self'],
    priority: 0
  },
  vine_whip:
  {
    name: 'Vine Whip',
    type: damageDealtByType.grass,
    summary: 'Inflicts regular damage with no additional effect.',
    power: 45,
    accuracy: 100,
    target: ['selected'],
    priority: 0
  }
}

function CreateMove(name, type, summary, power, target, accuracy, priority) {

  this.name = name
  this.type = type
  this.summary = summary
  this.power = power
  this.target = target
  this.accuracy = accuracy
  this.priority = priority

}

const pokemonMove = new CreateMove('Aromatherapy', new CreateType('Grass', damageDealtByType.grass, damageTakenByType.grass),
  'Cures the entire party of major status effects.', null, ['self', 'allies'], null, 0)

const pokemonAnotherMove = new CreateMove('Vine Whip', new CreateType('Grass', damageDealtByType.grass, damageTakenByType.grass),
  'Inflicts regular damage with no additional effect.', 45, 100, ['selected'], 0)

const pokemonOneMoreMove = new CreateMove('Synthesis', new CreateType('Grass', damageDealtByType.grass, damageTakenByType.grass),
  'Heals the user by half its max HP. Affected by weather.', null, null, ['self'], 0)


module.exports = { CreateMove, moveByType }
