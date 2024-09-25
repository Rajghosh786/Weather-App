const express = require('express')
const cors = require('cors')
const knex = require('knex')
const mysql = require('mysql2');
const app = express();
app.use(cors());
// const database = knex({
//     client: 'mysql2',
//     connection: {
//       host: '127.0.0.1',
//       port: 1305,
//       user: 'root',
//       password: '',
//       database: 'weather',
//     },
//   });


// database.select('*').from('cities').then(data=>{
//     console.log(data)
// })
const database = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'weather',
})

app.get('/',(req,res)=>{
    const sql = "SELECT * FROM CITIES"
    database.query(sql,(err,data)=>{
      if(err){
        return res.json('error')
      }else{
        return res.json(data);
      }
    })
})
app.listen(1305,()=>{
    console.log("server is on 1305")
});