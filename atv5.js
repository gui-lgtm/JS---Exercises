function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        return numero * calcularFatorial(numero - 1);
    }
}

console.log("O resultado é", calcularFatorial(5)); 
console.log("O resultado é", calcularFatorial(0)); 
console.log("O resultado é", calcularFatorial(1)); 
