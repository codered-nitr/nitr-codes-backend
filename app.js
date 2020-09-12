const express=require('express')();
require('dotenv').config()

const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true  });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

express.get("/",(req,res)=>{
    res.send("Hello there!");
})

express.listen(8080,()=>{
    console.log("Server started at http://localhost:8080")
})