function validarFormulario() {

    // Obter os valores
    var nome = document.getElementById("nome-input").value;
    var sexoFeminino = document.getElementById("sexo-input-feminino").checked;
    var sexoMasculino = document.getElementById("sexo-input-masculino").checked;
    var email = document.getElementById("email-input").value;
    var senha = document.getElementById("senha-input").value;
    
    
    // Verificação
    if (nome !== "" && (sexoFeminino || sexoMasculino) && email !== ""&& email.indexOf('@')!==-1 && email.indexOf('.') !==-1 && senha !== "") {
        // Sucesso
        alert("Seu cadastro foi concluído com sucesso!");
        
        location.href = "../login/login.html";
    } else {
        //Erro
        alert("Por favor, verifique os campos do usuário.");
    }
}
