module.exports = function(app){
    app.get('/cadastrar-usuario', function(req, res){
        app.app.controllers.cadastrarUsuario.formulario_usuario(app, req, res)
    });
    
    app.post('/usuarios/salvar', function(req, res){
        app.app.controllers.cadastrarUsuario.add_usuario(app, req, res)
    });
}   