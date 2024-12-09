// filtrar pessoas de curitiba
const csv = require("node-csv").createParser();

csv.parseFile("aluno.csv", function(erro, dados){
    if (erro){
        Console.log("erro");
    }
    
    console.log(dados);
})
