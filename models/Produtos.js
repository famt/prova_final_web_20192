var Produtos = module.exports = {
    produtos: [
        {
            codigo:"COD123",
            nome: "IPhone XI",
            descricao: "IPhone XI - 128 Gb",
            preco: 5500,
            categoria : "CEL"
        },
        {
            codigo:"COD124",
            nome: "PS4",
            descricao: "Playstation 4 Pro",
            preco: 2200,
            categoria : "ELE"
        },
        {
            codigo:"COD125",
            nome: "Perfume Dolce & Gabanna",
            descricao: "Perfume Dolce & Gabbana Light Blue Eau de Toilette Feminino 100ML",
            preco: 200,
            categoria : "SAU"
        }

    ],
    setProdutos: function(produtos) {
        Produtos.produtos = produtos;
    },
    getProdutos: function(){
        return Produtos.produtos;
    },
    pushProduto: function(produto){
        Produtos.produtos.push(produto);
    }
};