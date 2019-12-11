var produtos = require('../models/Produtos');
var categorias = require('../models/Categorias');

let getCategorias = (req, res) => {
    try{
        return res.json(categorias.categorias);
    }catch(e){
        return res.status(500).json({erro: 'Erro interno no servidor'});
    }
};

let getCategoria = (req, res) => {
    let { codigo } = req.params;
    try{
        let categoria = categorias.getCategoria().find((c) => {return c.codigo == codigo});
        if(!categoria){
            return res.status(404).json({erro: 'Não existe categoria cadastrada com esse código no servidor'});
        }
        return res.json(categoria);
    }catch(e){
        return res.status(500).json({erro: 'Erro interno no servidor'})
    }
};

let postCategoria = (req, res) => {
    let { codigo } = req.body;
    let { nome } = req.body;
    try {
        if(!codigo){
            return res.status(400).json({erro: 'Insira um código para a categoria'});
        }
        if(!nome){
            return res.status(400).json({erro: 'Insira um nome para a categoria'});
        }
        let categoria_teste = categorias.getCategoria().find((c) => {return c.codigo == codigo});
        if(categoria_teste){
            return res.status(400).json({erro: 'Já existe uma categoria com esse código cadastrado no sistema'});
        }

        let categoria = {
            codigo, 
            nome
        };

        categorias.pushCategoria(categoria);
        return res.json(categoria);

    }catch(e){ 
        return res.status(500).json({erro: 'Erro interno no servidor'});
    }
};

let putCategoria = (req, res) => {
    //TODO: Implementar a atualização de categorias
};

let deleteCategoria = (req, res) => {
    //TODO: Implementar a remoção de uma categoria
};

module.exports = {
    getCategorias: getCategorias,
    getCategoria,
    postCategoria,
    putCategoria,
    deleteCategoria,
}

