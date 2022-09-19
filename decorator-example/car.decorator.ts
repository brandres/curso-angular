export function CarDecorator(target: Function){
    console.log(target);
    target.prototype.color = 'Blanco';
    target.prototype.getColor = function() {console.log(this.color)};
}