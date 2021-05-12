function validar() {
  var nome = document.getElementById("nome");
  var aniversario = document.getElementById("aniversario");
  var cpf = document.getElementById("cpf");
  var endereco = document.getElementById("endereco");
  var telefone = document.getElementById("telefone");
  var email = document.getElementById("email");
  var mensagem = document.getElementById("mensagem");

    if (nome.value.length == 0) {
    nome.style.background="#CCCCCC";
    document.getElementById("erro_nome").style.display="block";
    nome.focus();
    return false;
  }
  else {
    nome.style.background="#FFFFFF";
    document.getElementById("erro_nome").style.display="none";
  }

  if (aniversario.value.length == 0) {
  aniversario.style.background="#CCCCCC";
  document.getElementById("erro_aniversario").style.display="block";
  aniversario.focus();
  return false;
}
else {
  aniversario.style.background="#FFFFFF";
  document.getElementById("erro_aniversario").style.display="none";
}

    if (cpf.value.length == 0) {
    cpf.style.background="#CCCCCC";
    document.getElementById("erro_cpf").style.display="block";
    cpf.focus();
    return false;
  }
  else {
    cpf.style.background="#FFFFFF";
    document.getElementById("erro_cpf").style.display="none";
  }

    if (endereco.value.length == 0) {
    endereco.style.background="#CCCCCC";
    document.getElementById("erro_endereco").style.display="block";
    endereco.focus();
    return false;
  }
  else {
    endereco.style.background="#FFFFFF";
    document.getElementById("erro_endereco").style.display="none";
  }

    if (telefone.value.length == 0) {
    telefone.style.background="#CCCCCC";
    document.getElementById("erro_telefone").style.display="block";
    telefone.focus();
    return false;
  }
  else {
    telefone.style.background="#FFFFFF";
    document.getElementById("erro_telefone").style.display="none";
  }


    if (email.value.length == 0) {
    email.style.background="#CCCCCC";
    document.getElementById("erro_email").style.display="block";
    email.focus();
    return false;
  }
  else {
    email.style.background="#FFFFFF";
    document.getElementById("erro_email").style.display="none";
  }

    if (mensagem.value.length == 0) {
    mensagem.style.background="#CCCCCC";
    document.getElementById("erro_mensagem").style.display="block";
    mensagem.focus();
    return false;
  }
  else {
    mensagem.style.background="#FFFFFF";
    document.getElementById("erro_mensagem").style.display="none";
  }

  document.form1.submit();

}

function limpar() {
  document.getElementById("erro_nome").style.display="none";
  document.getElementById("erro_aniversario").style.display="none";
  document.getElementById("erro_cpf").style.display="none";
  document.getElementById("erro_endereco").style.display="none";
  document.getElementById("erro_telefone").style.display="none";
  document.getElementById("erro_email").style.display="none";
  document.getElementById("erro_mensagem").style.display="none";
  nome.style.background="#FFFFFF";
  aniversario.style.background="#FFFFFF";
  cpf.style.background="#FFFFFF";
  endereco.style.background="#FFFFFF";
  telefone.style.background="#FFFFFF";
  email.style.background="#FFFFFF";
  mensagem.style.background="#FFFFFF";
  nome.value='';
  aniversario.value='';
  cpf.value='';
  endereco.value='';
  telefone.value='';
  email.value='';
  mensagem.value='';
  nome.focus();
}
