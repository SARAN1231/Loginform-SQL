const express = require('express');
const mysql = require('mysql')
const port = 8000;
const app = express();
const cors = require('cors');


app.use(express.json());
app.use(cors())

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Saran3112#",
  database: "Login",
  insecureAuth: true,
});

app.post("/register" , (req,res) => {

    const username = req.body.username
    const password = req.body.password
    db.query("insert into users (username,password) values(?,?)",[username,password],
    (err,result) => {
        console.log(err);
    }
    )
})
app.post("/login" , (req,res) => {

    const username = req.body.username
    const password = req.body.password
    db.query("select * from users where username= ? and password=?",[username,password],
    (err,result) => {
        if(err){
        console.log(err);
        }
        if(result.length > 0){
            res.send(result)
        }
        else {
            res.send({message: "not found"})
        }
    }
    )
})

app.listen(8000,() => {
    console.log(`server is running on port ${port}`)
})