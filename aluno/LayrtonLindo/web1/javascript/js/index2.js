
function calcu(){

const x = parseInt(document.getElementById("x").value);
const y = parseInt(document.getElementById("y").value);

console.log("x:"+x);
console.log("y:"+y);

const op = parseInt(document.getElementById("op").value);

var res;

switch(op){
    case 1:
    res = x+y ;
    break;
    case 2:
    res = x-y ;
    break;
    case 3:
    res = x*y ;
    break;
    case 4:
    res = x/y ;
    break;
    case 5:
      
    res = (x%y == 0)?"x é divisível por y":"x indivisível por y";

    /*
    if(x/2 == 0){
        res = "x é par"
    }else(
        res = "x é impar"
    )
    */
    break;
    default:    
        res = "O VALOR É INVÁLIDO"
}


// for(let i = 0; i < cars.length; i++) {
//    text += cars[i] + "<br>"
//}




/*
if(op==1){
    res = x + y;
}
else if (op==2){
    res= x - y;
}
else if (op==3){
    res = x * y;
}
else if (op==4){
    res = x/y;
}
else if(op==5)
    if (x%y == 0){
        res="x é par";
    }else{
        res="x é impar";
    }
*/







alert(res);


}









