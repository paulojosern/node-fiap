module.exports.index = function(app, req, res) {
    var connection = app.config.dbConnection();

    var model = new app.app.models.ProdutosDAO(connection);

    model.produtosHome(function(error, result){
        res.render('home', { produtos: result });
    })
};