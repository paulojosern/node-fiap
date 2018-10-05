function ClientesDAO (connection) {
    this._connection = connection
}

ClientesDAO.prototype.get = function (callback) {
    this._connection.query('SELECT * FROM  cliente', callback)
}

ClientesDAO.prototype.save = function(cliente, callback){
    this._connection.query('INSERT INTO cliente SET ? ', cliente, callback)
}

module.exports = function () {
    return ClientesDAO;
}