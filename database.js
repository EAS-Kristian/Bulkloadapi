
var mysql = require('mysql');
const express = require('express');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "my-secret-pw",
  database: "paymentsdb",
  port: 33060
});

con.connect();

const app = express();
app.use(express.json())

app.get('/api/payments', (req, res) => {
  con.query("SELECT * FROM payments", function (err, result, fields) {    
    if(err){
      res.send("Get failed")
      return
    }
    res.send(result)


  })
});

app.get('/api/payments/:id', (req, res) => {
    con.query("SELECT * FROM payments where transaction_id= "+req.params.id, function (err, result, fields) {    
      if(err){
        res.send("Get failed with: " + err)
        res.send("id passed" + req.params.id)
        return
      }
      res.send(result)

    })
});

app.post('/api/payments', (req, res) => {
    console.log(req.body)
  
var post_sql = "INSERT INTO payments SET transaction_id=\"" + req.body.transaction_id+"\",from_user=\""+req.body.from_user+"\",to_user=\""+req.body.to_user+"\",amount=\""+req.body.amount + "\"";
con.query(post_sql,function (err, result, fields){
  if(err){
    res.send("Post failed with: " + err)
    return
  }

  res.send("POST request called")
})
    
  });
  
  app.listen(8080, () => {
    console.log('The app has started')
  })


