let operacion = window.prompt("Escribe una operación (Suma,Resta,Multiplicación, División o Resto")
let num1 = parseInt(window.prompt("Escribe un número"))
let num2 = parseInt(window.prompt("Escribe otro número"))

let suma=num1+num2
let resta=num1-num2
let multi=num1*num2
let divis=num1/num2
let resto=num1%num2
let Total=0
let div1=document.getElementById("div1") 

switch(operacion)
{
    case "Suma": 
        Total=suma
        break;
    case "resta":
        Total=resta
        break;
    case "multiplicacion":
        Total=multi
        break;
    case "Division":
        Total=divis
        break;
    case "resto":
        Total=resto
        break;
    default:
        Total=0

}
div1.innerHTML= `
<input name="button2" type="button" 
onclick='alert("El resultado es:" + ${Total})' value=${operacion}  />`


 

