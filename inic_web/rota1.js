const express = require("express");
// o express é orientado a rota, para criação de rotas usamos express...
const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname+"/html/ind.html");

});

app.get("/sobreti", function(req, res){
    res.send("Insira informações sobre ti, para mantermos contactos");

});

app.get("/sobreti/:nome/:idade/:cargo", function(req, res){
    res.send("seu nome: "+req.params.nome+" idade: "+req.params.idade+ " Cargo: "+req.params.cargo);

});

app.listen(8083,function(){
    console.log("rodadndo na url: localhost: 8083");
})

