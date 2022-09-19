import { Electrodomestico } from "./Electrodomestico.js";

const RESOLUCION_DEFECTO = 20;
const ES4K_DEFECTO = false;
export class Television extends Electrodomestico{
    resolucion;
    es4K;
    constructor(resolucion = RESOLUCION_DEFECTO, es4K = ES4K_DEFECTO, ...args){
        super(...args);
        this.resolucion = resolucion;
        this.es4K = es4K;

    }

    getResolucion(){
        return this.resolucion;
    }

    getEs4K(){
        return this.es4K;
    }

    precioFinal(){
        return this.resolucion && super.precioFinal() + (this.es4K && 50) * (this.resolucion > 40 ? 1.30 : 1);
    }
}