import { Electrodomestico } from "./Electrodomestico.js";
import { Lavadora } from "./Lavadora.js";
import { Television } from "./Television.js";

const elect = new Electrodomestico();

console.log(elect);
console.log(elect.precioFinal());

const lav = new Lavadora();

console.log(lav);
console.log(lav.precioFinal());

const lav2 = new Lavadora(50);

console.log(lav2);
console.log(lav2.precioFinal());

const tel = new Television();

console.log(tel);
console.log(tel.precioFinal());

const tel2 = new Television(50, true);

console.log(tel2);
console.log(tel2.precioFinal());