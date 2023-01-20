
function CreatePokemon(name, number, type, abilities, hidden_abilities, stats, moves, evolution_stage, level, evolution_level, exp, nickname) {

  this.name = name
  this.number = number
  this.type = type
  this.abilities = abilities
  this.hidden_abilities = hidden_abilities
  this.stats = stats
  this.moves = moves
  this.evolution_stage = evolution_stage
  this.level = level
  this.evolution_level = evolution_level
  this.exp = exp
  this.nickname = nickname

}


CreatePokemon.prototype.move = function (move) {
  const attack = this.moves.find(moveName => moveName.name === move)
  if (attack) {
    console.log(`${this.name} used ${move}`)
  } else {
    console.log(`${this.name} cannot use ${move}`)
  }
}

CreatePokemon.prototype.train = function train(exp) {
  this.exp += exp
  while (this.exp >= 100) {
    this.level++
    this.exp -= 100
  }
  if (this.exp < 0) {
    this.exp = 0
  }
  console.log(`${this.name} trained and gained ${exp} experience points. CURRENT EXP: ${this.exp} LEVEL: ${this.level}`)
}

CreatePokemon.prototype.evolve = function evolve(name, evolution_level, type, abilities, hidden_abilities, stats, move) {
  const evolutionStage = ['baby', 'basic', 'stage-1', 'stage-2']
  this.evolution_level = evolution_level
  if (this.level >= this.evolution_level) {
    this.name = name
    this.number++
    const index = evolutionStage.indexOf(this.evolution_stage)
    this.evolution_stage = evolutionStage[index + 1]
    console.log(`Pokemon evolved and became ${this.name}! CURRENT NUMBER ${this.number} EVOLUTION_STAGE: ${this.evolution_stage}, EVOLUTION_LEVEL: ${this.evolution_level}`)
  } else {
    console.log('Insufficient level to evolve!');
  }
  if (type) {
    this.type.push(type)
  }
  if (abilities) {
    this.abilities.push(abilities)
  }
  if (hidden_abilities) {
    this.hidden_abilities.push(hidden_abilities)
  }
  if (stats) {
    this.stats = stats
  }
  if (move) {
    this.moves.push(move)
  }
}


module.exports = CreatePokemon
