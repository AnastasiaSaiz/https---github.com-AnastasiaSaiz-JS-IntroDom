let nombre = window.prompt("¿Cuál es tu nombre?")
let edad = parseInt(window.prompt("¿Cuántos años tienes?"))

let div1 = document.getElementById("div1")

switch (edad) {

    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
        div1.innerHTML = `<p id="p1">Hola ${nombre} , eres menor de edad </p>`
        let p1=document.getElementById("p1");
        p1.style.color="red";


        break;



    default: div1.innerHTML = `<p id="p2">Hola ${nombre} , eres mayor de edad </p>`
    let p2=document.getElementById("p2");
    p2.style.color="green";


}

