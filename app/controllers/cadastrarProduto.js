module.exports.formulario_produto = function (app, req, res) {
    res.render("admin/form_add_produtos", { 
        produto: {}, 
        validacao: {} 
    });
};

module.exports.add_produto = function (app, req, res) {
    var produto = req.body;

    req.assert('nome', 'Nome é obrigatório').notEmpty();
    req.assert('descricao', 'Descrição é obrigatório').notEmpty();
    

    var erros = req.validationErrors();

    if(erros) {
        res.render("admin/form_add_produtos", { 
            produto: produto, 
            validacao:erros 
        });
    }

    var connection = app.config.dbConnection();

    var model = new app.app.models.ProdutosDAO(connection); 

    model.save(produto, function(error, result){
        res.redirect('/produtos');
    });
};