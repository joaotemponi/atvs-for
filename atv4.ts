console.clear();
let teclado = require(`prompt-sync`)();

let numeros = new Array(10);
let numerosInvert = new Array(10);

for(let n = 0; n < 10; n++) {
    let numero = parseInt(teclado(`Digite um numero: `));
    numeros[n] = numero;
}

for(let n = 0, j = 9; n < 10; n++, j--) {
    numerosInvert[j] = numeros[n];
}

for(let n = 0; n < 10; n++) {
    console.log(numerosInvert[n]);
}
