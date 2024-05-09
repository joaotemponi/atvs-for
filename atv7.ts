const teclado = require('prompt-sync')();

const n2 = parseInt(teclado(`Digite um número inteiro para calcular o fatorial: `));

if (n2 < 0) {
    console.log(`O fatorial não está definido para números negativos.`);
} else {
    let fatorial = 1;

    for (let n1 = 1; n1 <= n2; n1++) {
        fatorial *= n1;
    }

    console.log(`O fatorial de ${n2} é ${fatorial}.`);
}

