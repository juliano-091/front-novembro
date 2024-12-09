var cidade = ["Araucaria", "Curitiba","Colombo", "pinhais"];

function listar (){
    cidade.sort();
    var inicio = 0;
    var fim = cidade.length -1;
    var res = "<ul>";

    while (inicio <= fim){
         
        res = res + "<li>" + cidade[inicio] + "</li>"; 
        inicio = inicio + 1;
    }
    res= res + "</ul>"
    resultado.innerHTML = res;
}
function add(){

        texto = nome.value;

        if (cidade.includes(texto) === false || nome.value ==! ""){
            cidade.push(texto);
              listar();
            nome.value = "";
        }else{
            alert("Cidade já cadastrada")
        }
}
