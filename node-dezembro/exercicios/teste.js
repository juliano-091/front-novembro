function teste() {
    var proximo = 1;  // O primeiro número da sequência de Fibonacci (a partir de 1)
    var anterior = 0; // O segundo número da sequência de Fibonacci (0)
    var result;       // Variável para armazenar o próximo número da sequência
    var final = 20;    // Define o número de termos na sequência de Fibonacci

    console.log(anterior); // Imprime o primeiro número (0)

    // Laço para gerar a sequência de Fibonacci até o número final
    for (var ini = 1; ini < final; ini++) {
        result = proximo + anterior;  // O próximo número é a soma dos dois anteriores
        console.log(result);          // Exibe o próximo número na sequência
        
        // Atualiza os valores de 'anterior' e 'proximo' para a próxima iteração
        anterior = proximo;
        proximo = result;
    }
}

teste();



