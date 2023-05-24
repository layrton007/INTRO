/*function gravar() {

    const texto = document.getElementById("texto").value;

    const span = document.getElementById("span");

    span.innerHTML = texto;

}

function limpar(){
    const span = document.getElementById("span");
    span.innerHTML = "";
}
*/




function gravar() {
    const texto = document.getElementById("texto").value;
    const span = document.getElementById("span");
  
    span.innerHTML = texto;
  
    localStorage.setItem('texto', texto);
  }
  
  window.onload = function() {
    const textoArmazenado = localStorage.getItem('texto');
    const span = document.getElementById("span");
  
    if (textoArmazenado) {
      span.innerHTML = textoArmazenado;
    }
  };

  function limpar() {
    const span = document.getElementById("span");
    span.innerHTML = "";
  
    localStorage.removeItem('texto');
  }
  
  
  