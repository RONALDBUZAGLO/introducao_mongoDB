const mongoose = require("mongoose");
const articleModel = require("./article");

mongoose.connect("mongodb://localhost:27017/aprendendoMongo",{ useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify:false});

const Article = mongoose.model('Article',articleModel);

Article.findByIdAndUpdate("605e7ab2e5c9c2239c7580e1",{body:"mobile programing"}).then(()=>{
    console.log("Atualizado com sucesso");
}).catch(err=>{
    console.log(err);
});


// Article.findByIdAndDelete("605e7878dd25023268ed4c6f").then(()=>{
//     console.log("dado removido");
// }).catch(err=>{
//     console.log(err);
// });

// Article.findOne({'title': 'reaasdctjs do zero'}).then(article=>{
//     console.log(article);
// }).catch(err=>{
//     console.log(err);
// });




// Article.find({'_id': '605e7ab2e5c9c2239c7580e1',
//     'title': 'reactjs do zero'}).then(article=>{
//     console.log(article);
// }).catch(err=>{
//     console.log(err);
// });




// Article.find({}).then(articles=>{
//     console.log(articles);
// }).catch(err=>{
//     console.log(err);
// });




// const artigo = new Article({
//     title:"reactjs do zero",
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