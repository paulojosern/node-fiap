module.exports = function(app) {
    app.get('/cadastrar-clientes', function(req, res){
        app.app.controllers.cadastrarClientes.formulario_clientes(app, req, res);
    })

    app.post('/clientes/salvar', function(req, res){
        app.app.controllers.cadastrarClientes.add_clientes(app, req, res);
    })
}