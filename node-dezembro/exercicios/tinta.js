
function calcula(){
   var mtrs;
   var lata = 108;
   var galao = 51;
   var vllata = 80;
   var vlgalao = 25;
   var qtdmtrs = 6;


   resultgalao = Math.ceil(mtrs / galao);
   console.log("Aquantidade de Galão que precisa é:  " + resultgalao);
   totalgalao = resultgalao * vlgalao;
   console.log("O valor total de Galão é:  " + totalgalao);

   resultlata = Math.ceil(mtrs / lata);
   totallata = (resultlata * vllata);
   console.log("A quantidade de latas que precisa é:  " + resultlata);
   console.log("O valor Total de lata é:  " + totallata);


   
}

calcula();
