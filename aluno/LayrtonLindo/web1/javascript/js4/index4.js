/*function calcu() {

    const x = parseInt(document.getElementById("x").value);
    const y = parseInt(document.getElementById("y").value);

    console.log("x:"+x);
    console.log("y:"+y);

    var text = "";

    for(i=x;i < y; x++){

        if (x % 2 === 0) {
            document.write("<span style='color:red'>" + x + "</span><br>");
          } 
        else {
            document.write(x + "<br>");
          }
        }
}

código errado para um dédeu
*/

function calcu() {
    const x = parseInt(document.getElementById("x").value);
    const y = parseInt(document.getElementById("y").value);
    let result = '';

    for (let i = x; i <= y; i++) {
      if (i % 2 === 0) {
        result += '<span style="color:red">' + i + '</span> <br>';
      } else {
        result += i + '<br>';
      }
    }

    document.getElementById('resultado').innerHTML = result;

}

function limpar() {
    document.getElementById("x").value = "";
    document.getElementById("y").value = "";
    document.getElementById("resultado").innerHTML = "";
}
  