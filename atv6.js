function calcularMediaAritmetica(arrayDeNumeros) {
    var soma = 0;
    for (var i = 0; i < arrayDeNumeros.length; i++) {
        soma += arrayDeNumeros[i];
    }
    return soma / arrayDeNumeros.length;
}

var numeros = [10, 20, 30, 40, 50];
var media = calcularMediaAritmetica(numeros); 
console.log("A média aritmética é:", media);
