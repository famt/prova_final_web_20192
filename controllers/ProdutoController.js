var produtos = require('../models/Produtos');
var categorias = require('../models/Categorias');

let getProdutos = (req, res) => {
    try{
        let produto = produtos.getProdutos();
        //TODO: Implementar o filtro de produtos por categorias
        return res.json(produto);
    }catch(e){
        return res.status(500).json({erro: 'Erro interno no servidor'});
    }
};

let getProduto = (req, res) => {
    let { codigo } = req.params;

    try {
        let produto = produtos.getProdutos().find((produto) => {return produto.codigo == codigo});
        if(!produto){
            return res.status(404).json({erro: 'Não existe produto com esse código'});
        }
        return res.json(produto);
    } catch(e){
        return res.status(500).json({erro: 'Erro interno no servidor'});
    }
};

let postProduto = (req,res) => {
    let { codigo } = req.body;
    let { nome } = req.body;
    let { descricao } = req.body;
    let { preco } = req.body;
    let { categoria } = req.body;
    try {
        if(!codigo){
            return res.status(400).json({erro: 'Insira uma matrícula'})
        }
        if(!nome){
            return res.status(400).json({erro: 'Insira um nome'});
        }
        if(!req.body.descricao){
            return res.status(400).json({erro: 'Insira uma descrição'});
        }
        if(!req.body.preco){
            return res.status(400).json({erro: 'Insira um preco'});
        }
        if(!req.body.categoria){
            return res.status(400).json({erro: 'Insira uma categoria'});
        }

        let produto = produtos.getProdutos().find((produto) => {return produto.codigo == codigo});

        if(produto){
            return res.status(400).json({erro: 'Já existe produto com esse produto cadastrado no sistema'});
        }

        let categoria_teste = categorias.getCategoria().find((cat) => {return cat.codigo == categoria});

        if(!categoria_teste){
            return res.status(400).json({erro: 'Não existe categoria informada'});
        }

        let p = {};
        p.codigo = codigo;
        p.nome = req.body.nome;
        p.descricao = req.body.descricao;
        p.preco = req.body.preco;
        p.categoria = req.body.categoria;
        produtos.pushProduto(p);
        return res.json(p);
    } catch(e){console.log(e)
        return res.status(500).json({erro: 'Erro interno no servidor'});
    }
};

let putProduto = (req, res) => {
    //TODO: Implementar a atualização de um produto
};

let deleteProduto = (req, res) => {
    //TODO: Implementar a remoção de um produto
};

module.exports = {
    getProdutos: getProdutos,
    getProduto: getProduto,
    postProduto: postProduto,
    putProduto,
    deleteProduto
};