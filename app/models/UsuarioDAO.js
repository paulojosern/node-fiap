function UsuarioDAO (connection) {
    this._connection = connection;
}

UsuarioDAO.prototype.get = function(callback){
    this._connection.query('SELECT * FROM  usuario', callback);
}

UsuarioDAO.prototype.save = function(usuario,  callback){
    this._connection.query('INSERT INTO usuario SET ? ', usuario, callback);
}

module.exports = function () {
    return UsuarioDAO;
}