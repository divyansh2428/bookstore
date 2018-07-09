const router = require('express').Router();
const app=router;
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  database: 'finalproject',
  user: 'aa',
  password: 'divyansh2428@'
});

app.all("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
  });

  app.post("/removeItem",function(req,res){

    console.log("delete");

    connection.query(
        "delete from items where product_id='"+req.body.id+"'",
          function(err, results, fields) {
              if(err)
              console.log(err);
            else{
                console.log("Deleted");
            //console.log(results); // results contains rows returned by server // fields contains extra meta data about results, if available
                
            connection.query(
                "delete from wishlist where product_id='"+req.body.id+"'",
                  function(err, results, fields) {
                      if(err)
                      console.log(err);
                    else{
                        console.log("Deleted");
                    //console.log(results); // results contains rows returned by server // fields contains extra meta data about results, if available
                        
                }
                  }
                );
        }
          }
        );

  })

  app.post("/sentMessages",function(req,res){

    connection.query(
        "select * from messages where sender_id='"+req.body.id+"' order by date_time DESC",
          function(err, results, fields) {
              if(err)
              console.log(err);
            else{
                console.log("Added in messages table");
            //console.log(results); // results contains rows returned by server // fields contains extra meta data about results, if available
                res.send({messages: results});
        }
          }
        );

  })

  app.post("/recievedMessages",function(req,res){

    connection.query(
        "select * from messages where reciever_id='"+req.body.id+"' order by date_time DESC",
          function(err, results, fields) {
              if(err)
              console.log(err);
            else{
                console.log("Added in messages table");
            //console.log(results); // results contains rows returned by server // fields contains extra meta data about results, if available
                res.send({messages: results});
        }
          }
        );

  })
  app.post("/sendMessage",function(req,res){

    connection.query(
        "insert into messages(sender_name,reciever_name,sender_id,reciever_id,message,book_name,product_id,url) values('"+req.body.sname+"','"+req.body.rname+"','"+req.body.user_id+"','"+req.body.seller_id+"','"+req.body.message+"','"+req.body.book_name+"','"+req.body.product_id+"','"+req.body.url+"')",
          function(err, results, fields) {
              if(err)
              console.log(err);
            else{
                console.log("Added in messages table");
            //console.log(results); // results contains rows returned by server // fields contains extra meta data about results, if available
            }
          }
        );

  })
  app.post("/wishlist",function(req,res){

    connection.query(
        "insert into wishlist values('"+req.body.user_id+"','"+req.body.product_id+"')",
          function(err, results, fields) {
              if(err)
              console.log(err);
            else{
                console.log("Added in Wishlist");
            //console.log(results); // results contains rows returned by server // fields contains extra meta data about results, if available
            }
          }
        );
})

app.post("/getWishlist",function(req,res){

    connection.query(
        "select product_id from wishlist where user_id='"+req.body.user_id+"'",
          function(err, results, fields) {
              if(err)
              console.log(err);
            else{
                console.log("Fetched from  Wishlist");
            //console.log(results); // results contains rows returned by server // fields contains extra meta data about results, if available

            res.send({product_id: results});

        }
          }
        );
})

    app.post("/delete",function(req,res){

        connection.query(
            "delete from wishlist where user_id='"+req.body.user_id+"' and product_id='"+req.body.product_id+"'",
              function(err, results, fields) {
                  if(err)
                  console.log(err);
                else{
                    console.log("Item Deleted");
                //console.log(results); // rsults contains rows returned by server // fields contains extra meta data about results, if available
            }
              }
            );

    })
    app.post("/getItem",function(req,res){

        connection.query(
            "select * from items where product_id='"+req.body.id+"'",
              function(err, results, fields) {
                  if(err)
                  console.log(err);
                else{
                    console.log("Item Fetched");
                //console.log(results); // results contains rows returned by server // fields contains extra meta data about results, if available
                    res.send({item:results[0]});
            }
              }
            );

    })
    app.post('/search',function(req,res){

        var search=req.body.search;
        console.log(search + "results");
        connection.query(
            "select * from items where name like '%"+search+"%' or author like '%"+search+"%' "  ,
              function(err, results, fields) {
                  if(err)
                  console.log(err);
                else{
                
                
                    //console.log(results); // results contains rows returned by server // fields contains extra meta data about results, if available
                    console.log("fetch search results "+ results.length);
                    res.send({listings: results,length: results.length});   
            }
              }
            );

    })

  app.post("/getPriceListings",function(req,res){


    connection.query(
        "select * from items where price>='"+req.body.price1+"' and price<='"+req.body.price2+"' order by price ASC" ,
          function(err, results, fields) {
              if(err)
              console.log(err);
            else{
            
            
                //console.log(results); // results contains rows returned by server // fields contains extra meta data about results, if available
                console.log("fetch price listings");
                if(results.length>0)
                    res.send({listings: results,working:true});
                else
                {
                    connection.query(
                        "select * from items order by price ASC",
                          function(err, results, fields) {
                              if(err)
                              console.log(err);
                            else{
                            
                            
                                //console.log(results); // results contains rows returned by server // fields contains extra meta data about results, if available
                                console.log("fetch listings");
                                res.send({listings: results,working:false});   
                        }
                          }
                        );
                }   
        }
          }
        );

  })
  app.get("/getListings/:filter",function(req,res){

    var filter=req.params.filter;
    if(filter=="lh"){

        connection.query(
            "select * from items order by price ASC",
              function(err, results, fields) {
                  if(err)
                  console.log(err);
                else{
                
                
                    //console.log(results); // results contains rows returned by server // fields contains extra meta data about results, if available
                    console.log("fetch listings");
                    res.send({listings: results});   
            }
              }
            );

    }
    else if(filter=="hl"){

        connection.query(
            "select * from items order by price DESC",
              function(err, results, fields) {
                  if(err)
                  console.log(err);
                else{
                
                
                    //console.log(results); // results contains rows returned by server // fields contains extra meta data about results, if available
                    console.log("fetch listings");
                    res.send({listings: results});   
            }
              }
            );
    }
    else{
        connection.query(
            "select * from items ORDER BY FIELD(con,'New','Almost New','Slightly Damaged','Worn Out')",
              function(err, results, fields) {
                  if(err)
                  console.log(err);
                else{
                
                
                    //console.log(results); // results contains rows returned by server // fields contains extra meta data about results, if available
                    console.log("fetch listings");
                    res.send({listings: results});   
            }
              }
            );
    }
  })
  app.post("/callMessages",function(req,res){

    connection.query(
        "select message,sender_name from messages  where reciever_name='"+req.body.name+"' or sender_name='"+req.body.name+"'",
          function(err, results, fields) {
              if(err)
              console.log(err);
            else{

                res.send({message:results});
            //console.log(results); // results contains rows returned by server // fields contains extra meta data about results, if available     
        }
          }
        );


  })

  app.post("/getDisName",function(req,res){

    connection.query(
        "select distinct sender_name from messages  where reciever_id='"+req.body.user_id+"'",
          function(err, results, fields) {
              if(err)
              console.log(err);
            else{
                res.send({names:results});
            //console.log(results); // results contains rows returned by server // fields contains extra meta data about results, if available
                
        }
          }
        );

  })

  app.post("/getDistinctName",function(req,res){

    connection.query(
        "select distinct reciever_name from messages  where sender_id='"+req.body.user_id+"'",
          function(err, results, fields) {
              if(err)
              console.log(err);
            else{
                res.send({names:results});
            //console.log(results); // results contains rows returned by server // fields contains extra meta data about results, if available
                
        }
          }
        );

  })
  app.post("/addItem",function(req,res){
    console.log("asdsad");
    console.log(req.body);
    connection.query(
        "insert into items(seller,name,author,description,price,url,con) values('"+req.body.seller+"','"+req.body.name+"','"+req.body.author+"','"+req.body.description+"','"+req.body.price+"','"+req.body.url+"','"+req.body.condition+"')",
          function(err, results, fields) {
              if(err)
              console.log(err);
            else{
                console.log("Inserted data in items");
            //console.log(results); // results contains rows returned by server // fields contains extra meta data about results, if available
                
        }
          }
        );
    
  })

  app.post("/id",function(req,res){

    connection.query(
        "select id from users where name='"+req.body.name+"'",
          function(err, results, fields) {
              if(err)
              console.log(err);
            else{
                console.log("name fetched");
                res.send({id : results[0].id});
            //console.log(results); // results contains rows returned by server // fields contains extra meta data about results, if available
            }
          }
        );


  })
  app.get("/getListings",function(req,res){

    console.log("In listings");
    connection.query(
        "select * from items order by price ASC",
          function(err, results, fields) {
              if(err)
              console.log(err);
            else{
            
            
                //console.log(results); // results contains rows returned by server // fields contains extra meta data about results, if available
                console.log("fetch listings");
                res.send({listings: results});   
        }
          }
        );

  })


  
  app.post("/getListings",function(req,res){

    console.log(req.body.name);
    connection.query(
        "select * from items where seller='"+req.body.name+"'",
          function(err, results, fields) {
              if(err)
              console.log(err);
            else{
                console.log("listing fetched");
                res.send({listings: results});
            //console.log(results); // results contains rows returned by server // fields contains extra meta data about results, if available
            }
          }
        );


  })
  
  app.post("/getName",function(req,res){

    connection.query(
        "select name,id from users where token='"+req.body.token+"'",
          function(err, results, fields) {
              if(err)
              console.log(err);
            else{
                console.log(req.body) ;
                console.log("Results....") ;
                console.log(results) ;
                console.log("name fetched");
                if (results.length !== 0 ) {
                    res.send({name : results[0].name, user_id: results[0].id});
                }else {
                    res.send( { name : null } ) ;
                }
            //console.log(results); // results contains rows returned by server // fields contains extra meta data about results, if available
            }
          }
        );


  })
  app.post("/check",function(req,res){

    connection.query(
        "select * from users where name='"+req.body.names+"' and token='"+req.body.token_id+"'",
          function(err, results, fields) {
              if(err)
              console.log(err);
            else{
                
            console.log(results); // results contains rows returned by server // fields contains extra meta data about results, if available
                if(results.length>0){
                    console.log("right");
                    res.send({error: false})
                }
                else{
                        console.log("wrong");
                    res.send({error: true});
                }
        }
          }
        );

  })
  app.post("/signup",function(req,res){
    
    require('crypto').randomBytes(48, function(err, buffer) {
        var token = buffer.toString('hex');
      console.log(token);
    connection.query(
        "insert into users(name,email,password,college,address,contact_no,token) values('"+req.body.name+"','"+req.body.email+"','"+req.body.password+"','"+req.body.college+"','"+req.body.address+"','"+req.body.contactno+"','"+token+"')",
          function(err, results, fields) {
              if(err)
              console.log(err);
            else{
                console.log("Inserted in database");
            //console.log(results); // results contains rows returned by server // fields contains extra meta data about results, if available
                res.send({token: token});
        }
          }
        );
    })

})
app.post("/login",function(req,res){
    
    connection.query(
        "select * from users where email='"+req.body.email+"' and password='"+req.body.password+"'",
          function(err, results, fields) {
              if(err)
              console.log(err);
            else{
                
            console.log(results); // results contains rows returned by server // fields contains extra meta data about results, if available
                if(results.length>0){

                    
                    console.log("Logged in");
                    console.log(results[0].id);
                        res.send({token: results[0].token, name: results[0].name });
                }
                else{

                    console.log("False login");
                        res.send({token: ""});
                }
        }
          }
        );

})






app.get("/data",function(req,res){
    console.log("In Server");
    var p={name: "Divyansh"};
    res.send(JSON.stringify(p));
})

exports = module.exports = router;