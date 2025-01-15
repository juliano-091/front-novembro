const express = require("express");
const app = express();

const fs = require("fs");

app.use(express.json());                      // express manipular os dados do formulario no formato Json
app.use(express.urlencoded({ extended: true }));

app.get("/", function(req, res){        // chamada do callback sempre 2 argumentos criando a primeira pagina
    res.send("OI Turma!")
});

app.get("/contato", function(req,res){  // chamada do callback sempre 2 argumentos criando a segunda pagina
    console.log(req.query);
    res.json(req.query);
});

app.post("/contato", function(req,res){
    let dados = req.body.nome 
    +","
    + req.body.cidade 
    + "," 
    + req.body.senha
    + "\n";


    fs.writeFile("dados.csv",dados, {flag: "a"},function(){
        res.send("dados salvo com sucesso");
    })
    
});
                            // especifica a porta para iniciar o servidor
app.listen(3000,function(){
    console.log("servidor iniciado");
});

