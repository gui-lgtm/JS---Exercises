function removerDuplicados(array) {
    return Array.from(new Set(array));
}

var arrayComDuplicados = [1, 2, 2, 3, 14, 14, 15, 26, 16];
var arraySemDuplicados = removerDuplicados(arrayComDuplicados);

console.log(arraySemDuplicados); // [1, 2, 3, 4, 5, 6]
