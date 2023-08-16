function ehPrimo(numero) {
    if (numero <= 1) {
        return false;
    }

    for (var i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

console.log("esse numero é primo?", ehPrimo(7)); 
console.log("esse numero é primo?", ehPrimo(10)); 
