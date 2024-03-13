var express = require('express');
var router = express.Router();
const userModel = require("./users");  

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render("index")})


// router.get('/create', async function(req, res, next) {
//    const createduser=await userModel.create({ // store it in variable 
//     username:"chinmay",
//     age:23,
//     name:"chotu"
//   }) // this is userModel --> ie. collection .in collection create(schema we define(structre of document))  but this code in  * "asynchronus " means this code will or will not run fisrt but the code after will run and give output without this coderesult AND thats why we have TO MAKE THIS CODE RUN proper we USE async , await   
//  res.send(createduser);
// })


// .find will find all user in collection
// router.get('/find', async function (req,res,next){
//   let alluser=await userModel.find();
//   res.send(alluser);
// })

// .findone will find only one that you want

// router.get('/findone', async function(req,res){
//   let findOne = await userModel.findOne({
//     username:"chinmay"
//   })
//   res.send(findOne)
// })

// it will find the data/user u want and delete only it

// router.get('/delete', async function(req,res){
//   let deleuser = await userModel.findOneAndDelete({
//     name:"chotu"
//   })
//   res.send(deleuser)
// })

//    ******SESSION********* 

// router.get('/', function(req, res, next) {
//   req.session.ban=true; // to create session ban = is any thing u want
//   res.render("index")})

//   router.get('/checkban',function(req,res){
//     // console.log(req.session);

//     if(req.session.ban===true){
//       res.send("u are baned");
//     }else{
//       res.send("not banned");
//     }
//   })

//   router.get('/removeban',function(req,res){
//     req.session.destroy(function(err){
//       if(err)throw err;
//       res.send("ban removed");
//     })
//   })

// ********* COKKIES *******

router.get('/',function(req,res){
  res.cookie("age",25);
  res.render("index");
})

router.get('/readcookie',function(req,res){
  console.log(req.cookies)
  console.log(req.cookies.age)
})

router.get('/delcookie',function(req,res){
  res.clearCookie("age");
  res.send("cokie is clear")
})
module.exports = router;
