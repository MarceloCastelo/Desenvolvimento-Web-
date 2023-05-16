function mostrarCampoTexto() {
    var campoTexto = document.getElementById("campoTexto");
    campoTexto.style.display = "block";
  }

  function ocultarCampoTexto() {
    var campoTexto = document.getElementById("campoTexto");
    campoTexto.style.display = "none";
  }
  

  function mostrarCampoTexto() {
    var campoTexto = document.getElementById('campoTexto');
    campoTexto.style.display = "block";
  }







  function mostrarCampoTexto(radio) {
    var campoTexto = radio.parentNode.nextElementSibling;
    campoTexto.style.display = radio.checked ? "block" : "none";
  }
  
  function adicionarFormulario(button) {
    var formularioExistente = button.parentNode;
    var novoFormulario = formularioExistente.cloneNode(true);
    
    // Limpa os campos do novo formulário
    var camposInput = novoFormulario.getElementsByTagName("input");
    for (var i = 0; i < camposInput.length; i++) {
      camposInput[i].value = "";
    }
    
    // Restaura o estilo do campoTexto no novo formulário
    var campoTexto = novoFormulario.querySelector(".campoTexto");
    campoTexto.style.display = "none";
    
    formularioExistente.parentNode.insertBefore(novoFormulario, formularioExistente.nextSibling);
  }
  
  