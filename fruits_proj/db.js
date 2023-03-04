const { MongoClient } = require("mongodb")

let dbConnection
module.exports = {
    connectToDB : function(cb){
        MongoClient.connect('mongodb://localhost:27017/bookstore')
        .then(function(client){
            dbConnection = client.db();
            return cb();
        }).catch(function(err){
            console.log(err);
            return cb(err);
        })
    },
    // return a value that is  DB connection that is 
    // further used for CRUD Operations
    getDB: function(){
        dbConnection
    } 
}