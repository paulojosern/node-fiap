function ProdutosDAO (connection) {
    this._connection = connection;
}

ProdutosDAO.prototype.get = function(callback){
    this._connection.query('SELECT * FROM  produto', callback);
}

ProdutosDAO.prototype.save = function(produto,  callback){
    this._connection.query('INSERT INTO produto SET ? ', produto, callback);
}

ProdutosDAO.prototype.produtosHome = function(callback){
    this._connection.query('SELECT * FROM  produto ORDER BY id_produto DESC LIMIT 5 ', callback);
}

module.exports = function () {
    return ProdutosDAO;
}