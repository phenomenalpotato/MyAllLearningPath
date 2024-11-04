// const prompt = require('./Exercise/Analisador_Texto/Node/node_modules/prompt-sync')();

// let xx = new Object();

// xx["picles"] = function (dados) {

//     console.log(dados);
// };

// function Hero(name, level) {

//     this.name = name;
//     this.level = level;
// }

// Hero.prototype.greet = function () {

//     return `${this.name} says hello.`;
// }

// // let hero1 = new Hero('Bjorn', 1);

// function Warrior(name, level, weapon) {

//     Hero.call(this, name, level);

//     this.weapon = weapon;
// }

// function Healer(name, level, spell) {

//     Hero.call(this, name, level);

//     this.spell = spell;
// }

// Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
// Object.setPrototypeOf(Healer.prototype, Hero.prototype);

// Warrior.prototype.attack = function () {

//     return `${this.name} attacks with the ${this.weapon}.`
// }

// Healer.prototype.heal = function () {

//     return `${this.name} casts ${this.spell}.`
// }

// const hero1 = new Warrior('Bjorn', 1, 'Axe');

// const hero2 = new Healer('Kanin', 1, 'Cure');

// xx.picles(hero1.greet());

// function waitThreeSeconds() {
//   var ms = 3000 + new Date().getTime();

//   while (new Date() < ms) {}

//   console.log("finished function");
// }

// function clickHandler() {
//   console.log("click event!");
// }

// document.addEventListener("click", clickHandler);

// waitThreeSeconds();
// console.log("finished execution");

// let aa = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function re(k, n, v) {
//   let x = v[k];

//   for (; k < n; k++) {
//     // 10
//     v[k] = v[k + 1]; // [10] = 11
//   }

//   v.pop();
//   return x;
// }

// re(3, aa.length, aa);

// console.log(aa);

var a = 0;
var b = false;

if (a !== b) {
  console.log("They are not equal!");
} else {
  console.log("Equal.");
}
