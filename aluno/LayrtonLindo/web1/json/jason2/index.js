const nomeArquivo = 'dat.json';


function aparecer(){

    //alert("oi")
    const box = document.createElement('div');
    
    function extrairDados() {

        fetch(nomeArquivo)

            .then(response => response.json())
            .then(caixa => {

            const largura = caixa.largura + caixa.unid;
            const altura = caixa.altura + caixa.unid;
            const cor = caixa.cor;
            const border = '${caixa.borderWidth}${caixa.unid}${caixa.style}${';

            box.style.widtidthh = largura;
            box.style.height = altura;
            box.style.backgroundColor = cor;
            box.style.border = border;
            
            document.body.appendChild(box);
            })
            .catch(error => {
                console.error('Erro ao ler o arquivo JSON:', error);
            });
    } 
  
    
    extrairDados();


}

function limpar(){

}
