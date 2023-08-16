function contarLetra(str, letra) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === letra) {
            count++;
        }
    }
    return count;
}

var frase = "A abelha voa baixo pela balsa";
var letraProcurada = "a";

var quantidade = contarLetra(frase, letraProcurada);
console.log("A letra '" + letraProcurada + "' aparece " + quantidade + " vezes na frase.");
