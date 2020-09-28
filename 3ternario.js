let nombre = window.prompt("¿Cuál es tu nombre?")
let edad = parseInt(window.prompt("¿Cuántos años tienes?"))

let div1=document.getElementById("div1")


let mensaje=edad>=18? div1.innerHTML= `<p id="p1">Hola ${nombre}, eres mayor de edad</p> ` : div1.innerHTML= `<p id="p2">Hola ${nombre}, eres menor de edad</p>`

let p1=document.getElementById("p1");
p1.style.color="green";

let p2=document.getElementById("p2");
p2.style.color="red";
        

