const CATEGORIAS_CONSUMO = {
    A: 0,
    B: 1,
    C: 2,
    D: 3,
    E: 4,
    F: 5,
}
const COLORES = {
    blanco: 0,
    negro: 1,
    rojo: 2,
    azul: 3,
    gris: 4
}
const CONSUMO_ELECTRICO_DEFECTO = CATEGORIAS_CONSUMO.F;
const COLOR_DEFECTO = COLORES.blanco;
const PRECIO_DEFECTO = 100;
const PESO_DEFECTO = 5;

const MAP_PRECIO_CATEGORIA_CONSUMO  = {
    [CATEGORIAS_CONSUMO.A]: 100,
    [CATEGORIAS_CONSUMO.B]: 80,
    [CATEGORIAS_CONSUMO.C]: 60,
    [CATEGORIAS_CONSUMO.D]: 50,
    [CATEGORIAS_CONSUMO.E]: 30,
    [CATEGORIAS_CONSUMO.F]: 10,
}

export class Electrodomestico{
    precioBase;
    color;
    consumoElectrico;
    peso;
    constructor(precio = PRECIO_DEFECTO, color = COLOR_DEFECTO, consumoElectrico = CONSUMO_ELECTRICO_DEFECTO, peso = PESO_DEFECTO){
        this.precioBase = precio;
        this.color = this.#comprobarColor(color);
        this.consumoElectrico = this.#comprobarConsumoElectrico(consumoElectrico);
        this.peso = peso;
    }

    getPrecioBase() {
        return this.precioBase;
    }

    getColor() {
        return this.color;
    }

    getConsumoElectrico() {
        return this.consumoElectrico;
    }

    getPeso () {
        return this.peso;
    }

    #comprobarConsumoElectrico(letra) {
        return CATEGORIAS_CONSUMO[letra] ?? CONSUMO_ELECTRICO_DEFECTO;
    }

    #comprobarColor(color) {
        return COLORES[color] ?? COLOR_DEFECTO;
    }
    
    precioFinal() {
        let precio = 100;
        if(this.precioBase < 20){
            precio = 10;
        }else if(this.precioBase < 50){
            precio = 50;
        }else if(this.precioBase < 80){
            precio = 80;
        }
        return this.precioBase + MAP_PRECIO_CATEGORIA_CONSUMO[this.consumoElectrico] + precio;
    }
}