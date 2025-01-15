// crud
// criar 
// read - ler
// update
// delete - 
// cadastro de aluno 
// nome - emial - ciadade idade - telefone
// API - comunicação de dados

const express = require("express");
const app = express();

app.use(express.json());                      
app.use(express.urlencoded({ extended: true }));

app.post("/cadastro", function(req, res){
    res.json(req.body)
    // res.send("creat");
});
app.get("/lista", function(req, res){
    res.send("lendo");
});
app.post("/atualizar", function(req, res){
    res.send("update");
});
app.post("/delete", function(req, res){
    res.send("delet");
});

app.listen(300,function(){
    console.log("servidor iniciado")
})

