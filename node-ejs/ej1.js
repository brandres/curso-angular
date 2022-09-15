let a = 3;
let b = 5;

let getBigger = (a, b) =>{
    let bigger = a > b ? Object.keys({a})[0] : Object.keys({b})[0];
    return `${bigger} is bigger`;
}

console.log(a === b ? 'Same' : getBigger(a, b));