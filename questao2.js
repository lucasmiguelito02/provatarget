function FibonacciNumero(numero) {
    let a = 0, b = 1;
    while (a <= numero) {
        if (a === numero) {
            return true;
        }
        let temp = a;
        a = b;
        b = temp + b;
    }
    return false;
}

const numero = parseInt(process.argv[2]);
if (FibonacciNumero(numero)) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
}
