var sqlite3 = require('sqlite3').verbose();
var express = require('express');
var http = require('http');
var cors = require("cors");

var corsOptions = {
  origin: "http://localhost:8080"
};

var app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(cors(corsOptions));
var server = http.createServer(app);
var db = new sqlite3.Database('./database/posts.db');

db.run('CREATE TABLE IF NOT EXISTS posts(id INTEGER PRIMARY KEY AUTOINCREMENT,title CHAR(50) NOT NULL , slug CHAR(5) NOT NULL, body TEXT NOT NULL)');

app.get('/', function(req,res){
    res.send("<h3> Hi there, You are going to perform CRUD operations via this appi running on port 3000");
  });

app.post('/add', function(req,res){
    db.serialize(()=>{
      db.run('INSERT INTO posts(title,slug,body) VALUES(?,?,?)', [req.body.title, req.body.slug,req.body.body], function(err) {
        if (err) {
          return console.log(err.message);
        }
        console.log("New post has been added");
        res.send("New post has been added into the database with title = "+req.body.title);
      });
  });
  });

  app.get('/posts', function(req,res){
    db.serialize(()=>{
      db.all('SELECT * FROM posts order by ID', function(err,row){     
        if(err){
          res.send("Error encountered while displaying");
          return console.error(err.message);
        }
        console.log("Get all posts successfully");
        res.send({posts:row});
       
      });
    });
  });
  
  app.get('/blog/post/view/:id', function(req,res){
    db.serialize(()=>{
      db.each('SELECT * FROM posts WHERE id =?', [req.params.id], function(err,row){     
        if(err){
          res.send("Error encountered while displaying");
          return console.error(err.message);
        }
        res.send({post:row});
        console.log("Entry displayed successfully");
      });
    });
  });

app.get('/close', function(req,res){
    db.close((err) => {
      if (err) {
        res.send('There is some error in closing the database');
        return console.error(err.message);
      }
      console.log('Closing the database connection.');
      res.send('Database connection successfully closed');
    });
});

server.listen(3000,function(){ 
  console.log("Server listening : http://localhost:3000/");
});