function AdicionarCarrinho(ingresso, qtd, valor, posicao){
    localStorage.setItem("ingresso" + posicao, ingresso);
    localStorage.setItem("qtd" + posicao, qtd);
    valor = valor * qtd;
    localStorage.setItem("valor" + posicao, valor);
    alert("Ingresso(s) adicionados ao carrinho com sucesso!");
}
