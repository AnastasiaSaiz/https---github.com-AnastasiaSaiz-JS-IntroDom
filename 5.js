let num1 = parseInt(window.prompt("Escribe un número"))
let num2 = parseInt(window.prompt("Escribe otro número"))
let suma=num1+num2
let resta=num1-num2
let multi=num1*num2
let divis=num1/num2

let div1=document.getElementById("div1")


div1.innerHTML= `
<p id="p1">La suma es = ${suma}  </p>
<p id="p2">La resta es = ${resta}  </p>
<p id="p3">La multiplicación es = ${multi} </p>
<p id="p4">La división es = ${divis}  </p>`
let p1=document.getElementById("p1");
p1.style.color="green";
p1.style.background="red";


let p2=document.getElementById("p2");
p2.style.color="blue";
p2.style.background="grey";


let p3=document.getElementById("p3");
p3.style.color="white";
p3.style.background="black";


let p4=document.getElementById("p4");
p4.style.color="white";
p4.style.background="red";


