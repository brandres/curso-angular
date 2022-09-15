const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question(`Introduce radio del circulo: `, radius => {
    console.log(`Area del circulo con radio ${radius} es: ${2*radius*Math.PI}`);
    readline.close();
  });