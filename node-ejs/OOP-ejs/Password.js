import * as PasswordGenerator from 'generate-password'
const LONGITUD_DEFECTO = 8;

export class Password{
    longitud;
    constrasenya;
    constructor(length = LONGITUD_DEFECTO){
        this.longitud = length;
        this.constrasenya = PasswordGenerator.generate(
            {length}
        );
    }

}