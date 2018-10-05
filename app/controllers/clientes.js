module.exports.clientes = function(app, req, res) {

    var connection = app.config.dbConnection();

    var model = new app.app.models.ClientesDAO(connection);

    model.get(function(error, result){
        res.render('clientes/clientes', { clientes: result })
    })

}