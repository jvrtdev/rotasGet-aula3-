import mysql from 'mysql';

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root1234',
    database: 'dbcopa'
})

conexao.connect()

export default conexao