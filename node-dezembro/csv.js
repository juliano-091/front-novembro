const fs = require ("fs");


let nome = "MARIA";
let cidade = "curitba";
let idade = "33";

let dados = nome + ","+ cidade +"," + idade;
fs.writeFile("aluno.csv",dados,{flag:"a"} ,function(){

});

// ler o arquivo csv e colocar o conteudo na tela.


fs.readFile("aluno.csv", "utf8",function(erro, dados){
    if (erro){
        console.log("erro");
    }else{
        console.log(dados);
    }
});