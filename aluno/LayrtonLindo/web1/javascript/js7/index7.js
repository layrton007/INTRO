function verResposta() {

    const ops = document.getElementsByName("inst");
    const lbsOps = document.getElementsByName("lblInst");

    for(let i = 0; i<ops.length; i++){
        if( ops[i].checked == true){
            const spnRes = document.getElementById("spnRes");
            spnRes.innerHTML = lbsOps[i].innerHTML;
        }
    }

}