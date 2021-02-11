require('dotenv').config();
const mongoose = require("mongoose");


const MongoClient = require('mongodb').MongoClient;
const uri = process.env.DATABASE_URL;
const client = new MongoClient(uri, { useNewUrlParser: true,  useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

