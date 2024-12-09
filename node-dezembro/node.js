const fs = require("fs");
let texto = "um conteudo qualquer para um arquivo";

fs.writeFile("arquivo.txt", texto, function(){
    console.log("terminou");
});


