module.exports = function(app){
    app.get('/cadastrar-produto', function(req, res){
        app.app.controllers.cadastrarProduto.formulario_produto(app, req, res)
    });
    
    app.post('/produtos/salvar', function(req, res){
        app.app.controllers.cadastrarProduto.add_produto(app, req, res)
    });
    
}   