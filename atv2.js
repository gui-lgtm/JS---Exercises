function converterParaMaiusculas(arrayDePalavras) {
    var novoArray = [];
    for (var i = 0; i < arrayDePalavras.length; i++) {
        var palavraMaiuscula = arrayDePalavras[i].toUpperCase();
        novoArray.push(palavraMaiuscula);
    }
    return novoArray;
}

var palavras = ["maçã", "banana", "laranja", "uva"];
var palavrasMaiusculas = converterParaMaiusculas(palavras);

console.log(palavrasMaiusculas); 