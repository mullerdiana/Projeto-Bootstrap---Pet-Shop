//validando nome digitado pelo usuário
function validaNome(nome) {
    if (!isNaN(nome.value)) {
      nome.style.border = "red solid 3px";
      nome.style.boxShadow = "0px 0px 4px red";
      $("#erro_nome").text("Inclua um nome válido. Ex: Maria dos Santos");
    } else {
      nome.style.border = "green solid 3px";
      nome.style.boxShadow = "0px 0px 4px green";
      $("#erro_nome").text("");
    }
    document.getElementById("nome").value = document.getElementById("nome").value.toUpperCase();
  }
  
  
//validando o email digitado pelo usuário
function validaEmail(email) {
    document.getElementById("email").value;
    if (email.value == "" || email.value.indexOf('@') < 0) {
      email.style.border = "red solid 3px";
      email.style.boxShadow = "0px 0px 4px red";
      $("#erro_email").text("Inclua um email válido. Ex: usuario@gmail.com");
    } else {
      email.style.border = "green solid 3px";
      email.style.boxShadow = "0px 0px 4px green";
      $("#erro_email").text("");
    }
  }
  
  //validando senha digitada pelo usuário
function validaSenha(senha) {
    document.getElementById("senha").value;
    if (senha.value =="" || senha.value.length <= 5) {
      senha.style.border = "red solid 3px";
      senha.style.boxShadow = "0px 0px 4px red";
      $("#erro_senha").text("Inclua uma senha válida. Mínimo 6 caracteres");
    } else {
      senha.style.border = "green solid 3px";
      senha.style.boxShadow = "0px 0px 4px green";
      $("#erro_senha").text("");
    }
  }

  //validação campo cidade
function validaEndereco(endereco) {
    if (!isNaN(endereco.value)) {
      endereco.style.border = "red solid 3px";
      endereco.style.boxShadow = "0px 0px 4px red";
      $("#erro_endereco").text("Inclua um endereco válido. Ex:Travessa Navegantes");
    } else {
      endereco.style.border = "green solid 3px";
      endereco.style.boxShadow = "0px 0px 4px green";
      $("#erro_endereco").text("");
    }
    document.getElementById("enderco").value = document.getElementById("nome").value.toUpperCase();
  }

 
  //validando numero digitado pelo usuário
function validaNumero(numero) {
    var  numero_value = parseInt(numero.value)
    if (numero_value == "" || isNaN(numero_value) || numero_value.length > 5) {
        numero.style.border = "red solid 3px";
        numero.style.boxShadow = "0px 0px 4px red";
        $("#erro_numero").text("Insira o número do endereço de entrega");
    } else {
      numero.style.border = "green solid 3px";
      numero.style.boxShadow = "0px 0px 4px green";
      $("#erro_numero").text("");
    }
    console.log(numero);
  }

  //validando bairro digitado pelo usuário
function validaBairro(bairro) {
  if (!isNaN(bairro.value) || bairro.value.length < 5) {
    bairro.style.border = "red solid 3px";
    bairro.style.boxShadow = "0px 0px 4px red";
    $("#erro_bairro").text("Inclua o nome do bairro para etrega. Ex: Parque dos Eucaliptos");
  } else {
    bairro.style.border = "green solid 3px";
    bairro.style.boxShadow = "0px 0px 4px green";
    $("#erro_bairro").text("");
  }
  document.getElementById("bairro").value = document.getElementById("bairro").value.toUpperCase();
}


//validando cep digitado pelo usuário
function validaCep(){
  var  cep_value = parseInt(cep.value)
  if (cep_value == "" || isNaN(cep_value) || cep_value.length < 8) {
      cep.style.border = "red solid 3px";
      cep.style.boxShadow = "0px 0px 4px red";
      $("#erro_cep").text("Insira apenas os números do cep. 22333444");
  } else {
    cep.style.border = "green solid 3px";
    cep.style.boxShadow = "0px 0px 4px green";
    $("#erro_cep").text("");
  }
}

//validando cidade digitada pelo usuário
function validaCidade(){
  if (!isNaN(cidade.value)){
      cidade.style.border = "red solid 3px";
      cidade.style.boxShadow = "0px 0px 4px red";
      $("#erro_cidade").text("Informe o nome da cidade");
  } else {
    cidade.style.border = "green solid 3px";
    cidade.style.boxShadow = "0px 0px 4px green";
    $("#erro_cidade").text("");
  }
}