module.exports.formulario_usuario = function (app, req, res) {
    res.render("admin/form_add_usuario", { 
        usuario: {}, 
        validacao: {} 
    });
};

module.exports.add_usuario = function (app, req, res) {
    var usuario = req.body;

    req.assert('us_nome', 'Nome é obrigatório').notEmpty();
    req.assert('us_sobrenome', 'Sobrenome é obrigatório').notEmpty();
    req.assert('us_cep', 'Cep é obrigatório').notEmpty()
    req.assert('us_cpf', 'CPF é obrigatório').len(11);
    req.assert('us_endereco', 'endereço é obrigatório').len(10, 200);

    var erros = req.validationErrors();

    if(erros) {
        res.render("admin/form_add_usuario", {
            usuario: usuario, 
            validacao:erros 
        });
    }

    var connection = app.config.dbConnection();

    var model = new app.app.models.UsuarioDAO(connection); 

    model.save(usuario, function(error, result){
        res.redirect('/usuarios');
    });

};