/*Question two Script */
var firstNumber = parseInt(prompt("Enter First number :"));
var secondNumber = parseInt(prompt("Enter Second number :"));

function Sum(x,y) {
    var Res =x+y;
   return Res;
}

function GetSum(){
    var res=Sum(firstNumber,secondNumber);
    document.write("<h2>Sum Is =</h2>" +res)
}