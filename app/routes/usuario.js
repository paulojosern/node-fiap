module.exports = function(app){

    app.get('/usuarios', function(req, res){
        app.app.controllers.usuarios.usuarios(app, req, res)
    });
       
};
