//alert("olá, mundo!");
//function myHello() {
    // alert("Olá mundo!");
    //var lbl = document.getElementById("spnMsg");

  //  lbl.innerHTML = "olá mundo!";
//}

function myHello2() {
    // alert("Olá mundo!");

    var iptMsg = document.getElementById("iptMsg");
    var msg = iptMsg.value;


    var lbl = document.querySelector("#lblMsg");
    lbl.style.color = "black";

    lbl.textContent = msg;
}

function apagar() {

    var lbl = document.querySelector("#lblMsg");
    lbl.textContent = "";
}

function mudarCor() {

    var lbl = document.querySelector("#lblMsg");
    lbl.style.color = "red" ;
}
