 var mysql = require('mysql');

 const conn = mysql.createConnection({
   host:'localhost',
   user: 'root',
   password:'root',
   database: 'grades'
 });

 conn.connect(err =>{
   if(!err){
    console.log('Database is connected.... THANK YOU JESUS');
   }else{
    console.log('ERROR DB connection FAILED .... THANK HIM ANYHOW');
   }
 })

 module.exports = conn;