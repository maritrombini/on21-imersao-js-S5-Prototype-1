const { TypeStatsDamage } = require('./type')

function MoveList(){
  this.moveByType = {
    "synthesis":
    {
      name: 'Synthesis',
      type: TypeStatsDamage["grass"]["damage_dealt"],
      summary: 'Heals the user by half its max HP. Affected by weather.',
      power: null,
      accuracy: null,
      target: ['self'],
      priority: 0
    },
    "vine_whip":
    {
      name: 'Vine Whip',
      type: TypeStatsDamage["grass"]["damage_dealt"],
      summary: 'Inflicts regular damage with no additional effect.',
      power: 45,
      accuracy: 100,
      target: ['selected'],
      priority: 0
    }
  }
  
  
}

MoveList.prototype.addMove = function addMove(name,value){
  this.moveByType[name] = value
}

MoveList.prototype.getMove = function getMove(name){
  return this.moveByType[name]
}

module.exports = { MoveList }
