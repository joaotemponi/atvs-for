let numerosPares: number[] = new Array(31);

for (let n1: number = 0, n2: number = 0; n1 <= 60; n1 += 2, n2++) {
    numerosPares[n2] = n1;
}

console.log(`Números pares de até 60 são: ${numerosPares}`);