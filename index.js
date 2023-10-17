// First Labour : Heracles vs Nemean Lion
// use your Figher class here
const Fighter = require("./src/Fighter.js");

const Heracles = new Fighter("🧔 Heracles", 20, 6);
const Lion = new Fighter("🦁 Nemean Lion", 11, 13);

Heracles.fight(Lion);

let round = 1;
while (Heracles.life !== 0 && Lion.life !== 0) {
  console.log(`🕛 Round #${round}`);
  Heracles.fight(Lion);
  Lion.fight(Heracles);
  round++;
}

if (Heracles.isAlive()) {
  console.log(`\n💀 ${Lion.name} is dead`);
  console.log(`🏆 ${Heracles.name} wins (💙 ${Heracles.life})`);
} else {
  console.log(`\n💀 ${Heracles.name} is dead`);
  console.log(`🏆 ${Lion.name} wins (💙 ${Lion.life})`);
}
