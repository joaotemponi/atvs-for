console.clear();
let teclado = require(`prompt-sync`)();

let numeros = new Array(10);
for(let n = 0; n < 10; n++) {
    let numero = parseInt(teclado(`Digite um número:`));
    numeros[n] = numero;
}

let maiorNumero = numeros[0];
for(let n = 1; n < 10; n++) {
    if(numeros[n] > maiorNumero) {
        maiorNumero = numeros[n];
    }
}

console.log(`O maior número é ${maiorNumero}`);