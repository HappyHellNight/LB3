var Num = "", x1 = "",x2 = "", forznak = "";
let i = 15;
var txt ;
var argznak;
function forfocus1()
{
    x2 = Num;
    Num = x1;
    txt = document.getElementById("txt1");
}
function forfocus2()
{
    x1 = Num;
    Num = x2;
    txt = document.getElementById("txt2");
}
function chpokus()
{
    x2 = Num;
    Num = x1;
}
function btn09(arg)
{
    var test = arg;
    Num += document.getElementById(test).value;
    txt.value = Num;    
}
function calculations()
{
    
    let num1 = Number(x1);
    let num2 = +x2;
    var result
    a = document.getElementById("znak").value;
    console.log(a);
    switch (a) {
        case "+":
            result = num1 + num2;
            if(result >= i){
                document.getElementById("answer").value = result + ">15";
                document.getElementById("answer").style.background = "Red";
            }
            else{
                document.getElementById("answer").value = result;
            }
          break;
        case "-":
            result = num1 - num2;
            if(result >= i){
                document.getElementById("answer").value = result + ">15";
                document.getElementById("answer").style.background = "Red";
            }
            else{
                document.getElementById("answer").value = result;
            }
          break;
        case "*":
            result = num1 * num2;
            if(result >= i){
                document.getElementById("answer").value = result + ">15";
                document.getElementById("answer").style.background = "Red";
            }
            else{
                document.getElementById("answer").value = result;
            }
          break;
        case "/":
            result = num1 / num2;
            if(num2 == 0){
                document.getElementById("answer").value =  num2 + "ТЫ ШО В ШКОЛЕ НЕ УЧИЛСЯ";
            }
            if(result >= i){
                document.getElementById("answer").value = result + ">15";
                document.getElementById("answer").style.background = "Red";
            }
            else{
                document.getElementById("answer").value = result;
            }
            break;
        default:
            alert("Такой функции нет!");
      }
     
}
function del()
{
    document.getElementById("txt1").value=" ";
    document.getElementById("txt2").value=" ";
    document.getElementById("answer").value=" ";
    document.getElementById("znak").value=" ";
    Num = "", x1 = "",x2 = "";
    document.getElementById("answer").style.background = " ";  
}
function znak(arg)
{
    chpokus()
    argznak = arg;
    forznak = document.getElementById(argznak).value;
    document.getElementById("znak").value = forznak;

}