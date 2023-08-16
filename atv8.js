var item1 = {
    nome: "Camiseta",
    preco: 25.99,
    quantidade: 2
};

var item2 = {
    nome: "Calça Jeans",
    preco: 49.99,
    quantidade: 1
};

var item3 = {
    nome: "Tênis",
    preco: 79.99,
    quantidade: 1
};


var carrinho = [item1, item2, item3];


function calcularTotalCarrinho(carrinho) {
    var total = 0;
    for (var i = 0; i < carrinho.length; i++) {
        total += carrinho[i].preco * carrinho[i].quantidade;
    }
    return total;
}

console.log("Itens no carrinho:");
for (var i = 0; i < carrinho.length; i++) {
    console.log("Item:", carrinho[i].nome);
    console.log("Preço:", carrinho[i].preco);
    console.log("Quantidade:", carrinho[i].quantidade);
    console.log("-----------------------");
}

var totalCarrinho = calcularTotalCarrinho(carrinho);
console.log("Valor total do carrinho:", totalCarrinho);
