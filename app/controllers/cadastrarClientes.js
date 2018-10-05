module.exports.formulario_clientes = function (app, req, res) {
    res.render('admin/form_add_clientes', {
        clientes: {},
        validacao: {}
    })
};

module.exports.add_clientes = function (app, req, res) {
    var clientes = req.body;

    req.assert('cd_endereco', ' endereco é obrigatorio').len(10, 200);

    var erros = req.validationErrors();

    if(erros) {
        res.render('admin/form_add_clientes', {
            clientes: clientes,
            validacao: erros
        })
    }
    
    var connection = app.config.dbConnection();

    var model = new app.app.models.ClientesDAO(connection);

    model.save(clientes, function(error, result){
        res.redirect('/clientes');
    })
}