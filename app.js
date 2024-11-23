const express = require('express');
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post      = require('./models/Post')

// configurações 
    // layout
    app.engine('handlebars', handlebars.engine({defaultLayoute: 'main'}))
    app.set('view engine','handlebars')

    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())
  
    app.get("/", function(req,res){
        Post.findAll({order:[['id','DESC']]}).then(function(posts) {

            res.render('home',{titulopagina: 'cadastar',posts: posts})
        })
    })

    app.get("/cadastrar", function(req,res){
        res.render('formulario',{titulopagina: 'cadastar post'})
    })

    app.post("/add", function(req,res){
        Post.create({
            titulo:req.body.titulo,
            conteudo:req.body.conteudo
        }).then(function () {
            res.redirect('/')
            
        }).catch(function(erro){
            res.send("UPS!.... deu um erro: "+erro)
        })
    })

    app.listen(8084,function(){
        console.log("rodadndo na url: localhost:8084");
    }) 
    