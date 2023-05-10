function gerar() {

    const qtd = parseInt(document.getElementById("iptQtd").value); 
    
	var divBox;
	
	for(let k=0; k<qtd; k++){

		divBox = document.createElement("div");

		divBox.setAttribute("class","box");

		divBox.innerHTML = k;
		divBox.setAttribute("id",k);

		document.body.appendChild(divBox);
		

		divBox.addEventListener("click", function(){
			this.style.backgroundColor = "red"; 
			alert(this.getAttribute("id"));
		});


	};
}
	//function hello(){


		//alert ("oi")
	//}















	
    	// Obter o número de caixas de texto a serem criadas


	/*var numeroDeCaixas = parseInt(document.getElementById("numeroDeCaixas").value);
	
	// Obter o elemento pai onde as caixas de texto serão adicionadas
	var paiDasCaixas = document.getElementById("caixasDeTexto");
	
	// Criar as caixas de texto e adicioná-las ao elemento pai
	for (var i = 0; i < numeroDeCaixas; i++) {
		var divBox = document.createElement("input");
		divBox.type = "text";
		paiDasCaixas.appendChild(divBox);
        

		ponteiro :0
	}*/
