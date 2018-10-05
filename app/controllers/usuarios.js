module.exports.usuarios = function(app, req, res) {
    var connection = app.config.dbConnection();

    var model = new app.app.models.UsuarioDAO(connection);

    model.get(function(error, result){
        res.render('usuarios/usuarios', { usuarios: result });
    })

};