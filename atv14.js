function inverterOrdemDasPalavras(str) {
    var palavras = str.split(' '); 
    var palavrasReversas = palavras.reverse(); 
    return palavrasReversas.join(' '); 
}

var frase = "O céu está azul hoje";
var fraseInvertida = inverterOrdemDasPalavras(frase);
console.log(fraseInvertida);
