function calcula(event){
   event.preventDefault(); // Previne o comportamento padrão do botão (não recarregar a página)

   // Captura o valor de metros quadrados do input
   var mtrs = parseFloat(document.getElementById('mtrs').value);
   
   // Verifica se o valor inserido é válido
   if (isNaN(mtrs) || mtrs <= 0) {
       alert("Por favor, insira um valor válido para metros.");
       return;
   }

   // Definindo os valores de latas e galões
   var lata = 108; // metros cobertos por uma lata
   var galao = 51; // metros cobertos por um galão
   var vllata = 80; // preço de uma lata
   var vlgalao = 25; // preço de um galão

   // Cálculo de galões
   var resultgalao = Math.ceil(mtrs / galao); // arredonda para cima
   var totalgalao = resultgalao * vlgalao; // total de galões

   // Cálculo de latas
   var resultlata = Math.ceil(mtrs / lata); // arredonda para cima
   var totallata = resultlata * vllata; // total de latas

   
   console.log("A quantidade de Galão que precisa é: " + resultgalao);
   console.log("O valor total de Galão é: " + totalgalao);
   console.log("A quantidade de latas que precisa é: " + resultlata);
   console.log("O valor Total de lata é: " + totallata);

   
   document.getElementById('resultgalao').value = resultgalao;
   document.getElementById('totalgalao').value = "R$ " + totalgalao.toFixed(2);
   document.getElementById('resultlata').value = resultlata;
   document.getElementById('totallata').value = "R$ " + totallata.toFixed(2);


   while (mtrs > 0) {

      let qtdLatas = Math.floor(mtrs / lata); 
      
      // Verificar se sobra alguma área que precisa de galões
      let resto = mtrs % lata; 
      
      // Calcular quantos galões são necessários para o resto
      let qtdGaloes = Math.ceil(resto / galao); // Arredondar para cima para garantir que a área seja coberta
      document.getElementById('qtdLatas') = qtdLatas;
      console.log(qtdLatas);
      console.log(qtdGaloes);
      
      mtrs = 0;
      
   }
   
}




