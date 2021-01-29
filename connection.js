const mysql=require('mysql')

const con =mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    port:'3306',
    database:'Jupitor'
})

con.connect()

module.exports=con;