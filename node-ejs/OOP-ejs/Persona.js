const SEXOS = {
    hombre: 'H',
    mujer: 'M',
    otro: 'O'
}
const SEXO_DEFECTO = SEXOS.hombre;

export class Persona{
    nombre;
    edad;
    DNI;
    sexo;
    peso;
    altura;
    constructor(){
        this.nombre = '';
        this.edad = 0;
        this.DNI = '';
        this.sexo = SEXO_DEFECTO;
        this.peso = 0;
        this.altura = 0;
    }
}