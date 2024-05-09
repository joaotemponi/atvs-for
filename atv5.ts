const teclado = require(`prompt-sync`)();

let numeros = new Array(10);

for (let n1 = 0; n1 < 10; n1++) {
    numeros[n1] = parseFloat(teclado(`Digite o ${n1 + 1}º número: `));
}

for (let n1 = 0; n1 < numeros.length - 1; n1++) {
    for (let n2 = 0; n2 < numeros.length - n1 - 1; n2++) {
        if (numeros[n2] > numeros[n2 + 1]) {
            let temp = numeros[n2];
            numeros[n2] = numeros[n2 + 1];
            numeros[n2 + 1] = temp;
        }
    }
}

console.log(`Os números em ordem crescente são:`);
for (let n1 = 0; n1 < numeros.length; n1++) {
    console.log(numeros[n1]);
}