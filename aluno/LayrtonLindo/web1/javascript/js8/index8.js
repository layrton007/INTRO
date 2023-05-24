/*function iniciarCont() {

    const qtdTime = document.getElementById("qtdTime").value;
    const spn = document.getElementById("spn");
    const btnIniciar = document.getElementById("btnIniciar");

    setInterval(regredir, 1000);
    
};

function regredir(){

    const qtdTime = parseInt(document.getElementById("qtdTime").value);
    const spn = document.getElementById("spn");
    var cont = qtdTime;


    for(let k = 0; k <qtdTime; k++){

        
        cont -= 1;
        

    }

        spn.innerHTML = cont;

}
*/


function iniciarCont() {
    
    const qtdTime = document.getElementById("qtdTime").value;
    const spn = document.getElementById("spn");
    const btnIniciar = document.getElementById("btnIniciar");

    let contador = qtdTime;

    const intervalo = setInterval(regredir, 1000);


    onkeyup


    function regredir() {
        contador -= 1;
        spn.innerHTML = contador;

        if (contador === 0) {
            clearInterval(intervalo);
        }
    }
}
