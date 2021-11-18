const { MongoClient } = require('mongodb');
//uri is like url
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.wpvof.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//this connects to the database
const isConnected = client.connect();


module.exports = {
    client, isConnected
}