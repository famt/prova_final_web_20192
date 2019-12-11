const CategoriaController = require('./controllers/CategoriaController');
const ProdutoController = require('./controllers/ProdutoController');

module.exports = function(app){

    app.get('/api/produtos', ProdutoController.getProdutos);
    app.get('/api/produtos/:codigo', ProdutoController.getProduto);
    app.post('/api/produtos', ProdutoController.postProduto);
    app.get('/api/categorias', CategoriaController.getCategorias);
    app.get('/api/categorias/:codigo', CategoriaController.getCategoria);
    app.post('/api/categorias', CategoriaController.postCategoria);    

}