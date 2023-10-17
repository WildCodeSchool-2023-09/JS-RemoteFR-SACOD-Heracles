/* Fighter class definition */

const MAX_LIFE = 100;

class Fighter {
  constructor(name, strength, dexterity) {
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.life = MAX_LIFE;
  }

  setLife(number) {
    if (number < 0) {
      this.life = 0;
    } else {
      this.life = number;
    }
  }

  fight(defender) {
    let fighterDamage = this.randomDamage(this.strength);
    let damage =
      fighterDamage - defender.dexterity > 0
        ? fighterDamage - defender.dexterity
        : 0;
    defender.setLife(defender.life - damage);

    console.log(
      `${this.name} 🗡️  ${defender.name} 💙${defender.name} : ${defender.life}`
    );
  }

  randomDamage(number) {
    return Math.floor(Math.random() * number + 1);
  }

  isAlive() {
    return this.life !== 0;
  }
}

module.exports = Fighter;
