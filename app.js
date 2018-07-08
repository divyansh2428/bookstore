
var express=require("express");
var app=express();
var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static("public"));
app.use(bodyParser.json());
const mysql = require('mysql2');
app.use('/',require('./routes'));


const connection = mysql.createConnection({
  host: 'localhost',
  database: 'finalproject',
  user: 'aa',
  password: 'divyansh2428@'
});

connection.query(
    `create database if not exists finalproject`,
      function(err, results, fields) {
          if(err)
          console.log(err);
        else{
            console.log("Database Created");
        //console.log(results); // results contains rows returned by server // fields contains extra meta data about results, if available
        }
      }
    );

    connection.query(
        `create table if not exists users(id integer primary key auto_increment,name varchar(250),email varchar(250),password varchar(250),college varchar(250),address varchar(250),contact_no varchar(250),token varchar(250))`,
          function(err, results, fields) {
              if(err)
              console.log(err);
            else{
                console.log("Table Created");
            //console.log(results); // results contains rows returned by server // fields contains extra meta data about results, if available
            }
          }
        );

        connection.query(
            `create table if not exists wishlist(user_id int, product_id int, primary key(user_id,product_id))`,
              function(err, results, fields) {
                  if(err)
                  console.log(err);
                else{
                    console.log("Table Created");
                //console.log(results); // results contains rows returned by server // fields contains extra meta data about results, if available
                }
              }
            );

            
        connection.query(
            `create table if not exists items(product_id integer primary key auto_increment,seller varchar(250),name varchar(250),author varchar(250),description varchar(250),price integer,url varchar(250),con varchar(250))`,
              function(err, results, fields) {
                  if(err)
                  console.log(err);
                else{
                    console.log("Table Created for items");
                //console.log(results); // results contains rows returned by server // fields contains extra meta data about results, if available
                }
              }
            );
            connection.query(
                `create table if not exists messages(id integer primary key auto_increment,sender_name varchar(250),reciever_name varchar(250),sender_id integer,reciever_id integer,message varchar(250),date_time datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,book_name varchar(250),product_id integer, url varchar(250))`,
                  function(err, results, fields) {
                      if(err)
                      console.log(err);
                    else{
                        console.log("Table Created for messages");
                    //console.log(results); // results contains rows returned by server // fields contains extra meta data about results, if available
                    }
                  }
                );
        

                


app.listen(2000,function(){
    console.log("Node Server Started");
})

