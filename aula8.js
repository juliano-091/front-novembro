$(document).ready(function(){

    $("#salvar").click(function(){
    $("#nome").removeClass("is-invalid");
    $("#cpf").removeClass("is-invalid");
    $("#email").removeClass("is-invalid");
    $("#cidade").removeClass("is-invalid");

    
    // Validação do nome
    var nome = $("#nome").val();

    if( nome === "" || nome === " "){
        $("#nome").addClass("is-invalid")
        
    };
        
    // Validação do cpf
    var cpf_rex = /^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}$/gm;
    var cpf = $("#cpf").val();
    if(cpf_rex.test(cpf)=== false){
        $("#cpf").addClass("is-invalid");
    };

    // validação e-mail
    var email_rex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
    var email = $("#email").val();

    if(email_rex.test(email) === false){
        $("#email").addClass("is-invalid");
    };

    // validação cidade
    var cidade = $("#cidade").val();

    if(cidade === "0"){
        $("#cidade").addClass("is-invalid");
    };

    });

});
