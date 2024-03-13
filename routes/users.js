// install mongoosejs
// require and setup connection
// make Schema
// create model and export 

const mongoose = require('mongoose');// requiring mongoose that we install through npm

mongoose.connect("mongodb://127.0.0.1:27017/practicedb"); // this line of code will make the DB of practicedb 

// schema --> banne wale har document mein kya kya honga
   
const userschema= mongoose.Schema({
  username:String,
  name: String,
  age:Number
}) // u have to store it in some varaible ie.userschema to use it


// 
module.exports= mongoose.model("user",userschema); // "user" will be the name of ur collection that u want , and its structure od its document --> schema u define (userschema)





















