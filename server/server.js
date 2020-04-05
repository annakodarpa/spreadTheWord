var express = require('express')
var app = express()
var cors = require('cors')
const { v1: uuidv1 } = require('uuid');
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
const { User } = require('./db/db')

app.use(cors())
// const { Client } = require("pg");

// const client = new Client({
//   user: "postgres",
//   host: "localhost",
//   database: "Spread",
//   password: "1234",
//   port: "5432"
// });
const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
})

// POST method route
app.post('/register', function (req, res) {   
    console.log(req.body);
    User.create(req.body)
    .then(user => res.json(user))
  })

  // POST method route
app.post('/update', function (req, res) {   
    console.log(req.body);


    User.update(
        {fever: req.body.fever, cough: req.body.cough, soreThroat: req.body.soreThroat, tired: req.body.tired, hardToBreath: req.body.hardToBreath},
        {
            where: {
                id: req.body.id
            },
        } 
    )
      .then(function(rowsUpdated) {
        res.json(rowsUpdated)
      })
})