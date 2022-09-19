import { Electrodomestico } from "./Electrodomestico.js";

const CARGA_DEFECTO = 5;
export class Lavadora extends Electrodomestico {
    carga;

    constructor(carga = CARGA_DEFECTO,...args){
        super(...args);
        this.carga = carga;
    }

    getCarga(){
        return this.carga;
    }

    precioFinal (){
        return super.precioFinal() + (this.carga > 30 && 50);
    }
}