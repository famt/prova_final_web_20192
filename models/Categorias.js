var Categorias = module.exports = {
    categorias: [
        {
            codigo:"ELE",
            nome: "Eletrônicos"
        },
        {
            codigo:"SAU",
            nome: "Saúde, Beleza e Moda"
        },
        {
            codigo:"CEL",
            nome: "Celulares"
        }
    ],
    setCategoria: function(categorias) {
        Categorias.categorias = categorias;
    },
    getCategoria:function(){
        return Categorias.categorias;
    },
    pushCategoria:function(categorias){
        Categorias.categorias.push(categorias);
    }
};