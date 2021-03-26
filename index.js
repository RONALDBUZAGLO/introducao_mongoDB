const mongoose = require("mongoose");
const articleModel = require("./article");

mongoose.connect("mongodb://localhost:27017/aprendendoMongo",{ useNewUrlParser: true, useUnifiedTopology: true});

const Article = mongoose.model('Article',articleModel);

// const artigo = new Article({
//     title:"aslkdjalksjd",
//     author: "Ronald Buzaglo",
//     body: "zxmcn laskjd pqwoie",
//     special:true,
//     resume:{
//         content:"pqwioe laskjd mcbv",
//         author: "sdkjfhwieury"
//     },

// });

// artigo.save().then(()=>{
//     console.log("Artigo salvo!");
// }).catch((err)=>{
//     console.log(err);
// });