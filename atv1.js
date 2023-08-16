function somarArray(array) {
    var soma = 0;
    for (var i = 0; i < array.length; i++) {
        soma += array[i];
    }
    return soma;
}

var numeros = [1, 2, 4, 8, 16];
var result = somarArray(numeros);
console.log("A soma dos elementos do array é:", result);
