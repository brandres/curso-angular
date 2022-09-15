const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question(`Cual es tu nombre?`, name => {
    console.log(`Bienvenido ${name}!`);
    readline.close();
  });