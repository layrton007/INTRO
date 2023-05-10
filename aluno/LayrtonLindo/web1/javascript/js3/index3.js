function repita(){

  
    const msg = document.getElementById("msg").value;
    const rept = parseInt(document.getElementById("rept").value);

    const containermsg = document.getElementById("spnmsg");

    var txt = "";

    for(let i = 0; i<rept; i++){
       // console.log(tt);
       txt = txt + msg + "<br>" + "<br>";
    }

    containermsg.innerHTML = txt;
}