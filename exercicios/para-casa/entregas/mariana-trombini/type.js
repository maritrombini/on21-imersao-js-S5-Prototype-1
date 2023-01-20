
const damageDealtByType = {
  grass: [
    { name: 'bug', value: 0.5 },
    { name: 'dark', value: 1 }
  ],
  poison: [
    { name: 'bug', value: 1 },
    { name: 'dark', value: 1 }
  ]
}


const damageTakenByType = {
  grass: [
    { name: 'bug', value: 0.5 },
    { name: 'dark', value: 1 }
  ],
  poison: [
    { name: 'bug', value: 1 },
    { name: 'dark', value: 1 }
  ]
}

function CreateType(name, damage_dealt, damage_taken) {

  this.name = name
  this.damage_dealt = damage_dealt
  this.damage_taken = damage_taken
}

const pokemonType = new CreateType('Grass', damageDealtByType.grass, damageTakenByType.grass)

const pokemonAnotherType = new CreateType('Poison', damageDealtByType.poison, damageTakenByType.poison)


module.exports = { CreateType, damageDealtByType, damageTakenByType }