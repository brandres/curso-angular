import { Electrodomestico } from "./Electrodomestico.js";
import { Lavadora } from "./Lavadora.js";

const elect = new Electrodomestico();

console.log(elect);
console.log(elect.precioFinal());

const lav = new Lavadora();

console.log(lav);
console.log(lav.precioFinal());

const lav2 = new Lavadora(50);

console.log(lav2);
console.log(lav2.precioFinal());