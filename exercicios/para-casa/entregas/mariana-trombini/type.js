function PokemonType(name,damage_dealt,damage_taken){
  this.name = name
  this.damage_dealt = damage_dealt
  this.damage_taken = damage_taken
}

function TypeDamage(name,value){
  this.name = name
  this.value = value
}

const TypeStatsDamage = {}

TypeStatsDamage["grass"] = new PokemonType(
  "grass",
  [
    new TypeDamage("bug",0.5),
    new TypeDamage("dark",1),
  ],
  [
    new TypeDamage("bug",0.5),
    new TypeDamage("dark",1),
  ]
)

TypeStatsDamage["poison"] = new PokemonType(
  "poison",
  [
    new TypeDamage("bug",1),
    new TypeDamage("dark",1),
  ],
  [
    new TypeDamage("bug",1),
    new TypeDamage("dark",1),
  ]
)

module.exports = {TypeStatsDamage}