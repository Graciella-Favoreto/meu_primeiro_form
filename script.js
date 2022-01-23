function validar(){
  var nome = formulario.nome;
  var email_form = formulario.email;
  
  if(nome.value || email_form.value == ""){
    alert("Preencha todos os dados");
    nome.focus;
  }
}
