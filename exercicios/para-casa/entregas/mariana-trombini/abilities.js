const abilitiesByType = {
  overgrow:
  {
    name: 'Overgrow',
    summary: 'Strengthens Grass moves to inflict 1.5× damage at 1/3 max HP or less.',
    effect: 'When this Pokémon has 1/3 or less of its HP remaining, its Grass-type moves inflict 1.5× as much regular damage.'
  }
  ,
  chlorophyll:
  {
    name: 'Chlorophyll',
    summary: 'Doubles Speed during strong sunlight.',
    effect: "This Pokémon's Speed is doubled during strong sunlight."
  }
}

function CreateAbilities(name, summary, effect) {

  this.name = name
  this.summary = summary
  this.effect = effect

}

const pokemonAbilities = new CreateAbilities('Overgrow', 'Strengthens Grass moves to inflict 1.5× damage at 1/3 max HP or less.', 'When this Pokémon has 1/3 or less of its HP remaining, its Grass-type moves inflict 1.5× as much regular damage.')

const pokemonHiddenAbility = new CreateAbilities('Chlorophyll', 'Doubles Speed during strong sunlight.', "This Pokémon's Speed is doubled during strong sunlight.")


module.exports = { CreateAbilities, abilitiesByType }