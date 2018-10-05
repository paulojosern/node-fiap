
const mysql = require('mysql')

const dbConnection = function(){
    //console.log('conexão feita!!!!!!!!!!!!!')
    return  mysql.createConnection(
        {
            host: 'localhost',
            user: 'root',
            password: 'B@y350',
            database: 'sistema_produtos'
        }
    )
}

module.exports = () => dbConnection