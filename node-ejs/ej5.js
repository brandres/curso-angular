const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question(`Introduce un numero: `, number => {
    let resto = number%2;
    console.log(`${number} ${resto != 0 ? 'no' : 'si'} es divisible entre 2`);
    readline.close();
  });