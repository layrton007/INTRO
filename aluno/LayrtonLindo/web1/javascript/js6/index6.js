
var divBox;
var k;


function gerar() {

    const qtd = parseInt(document.getElementById("iptQtd").value); 
    
	 
	
	for( k=0; k<qtd; k++){

		divBox = document.createElement("input");

		divBox.setAttribute("type","text") ;
       

		divBox.innerHTML = k;
		divBox.setAttribute("id",k);

		document.body.appendChild(divBox);
		

		/*divBox.addEventListener("click", function(){
		
			alert(this.getAttribute("id"));
		
        
        });
        */
    }

}


function unir() {

    const qtd = parseInt(document.getElementById("iptQtd").value);

    let resultado = ""; // variável para armazenar 

    for (let i = 0; i < qtd; i++) {
        const texto = document.getElementById(i); // linha estranha

        resultado += texto.value; // junta o conteudo
    }

    //console.log(`Resultado final: ${resultado}`);
    var res = document.getElementById("res")

    res.innerHTML = resultado; // imprime

}


/*function unir() {
    const qtd = parseInt(document.getElementById("iptQtd").value);
    let resultado = ""

    for(let i=0; i < qtd; i++){
        var texto = 
    }
}
*/