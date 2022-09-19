import { CarDecorator } from "./car.decorator";
@CarDecorator
export class Car {
    marca: string;
    constructor(marca: string){
        this.marca = marca;
    }
}