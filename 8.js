let edad = parseInt(window.prompt("¿Qué años tienes?"));
let div1 = document.getElementById("div1")

if (edad < 18) {
    div1.innerHTML = `
<p>No puedes alquilar el coche, eres menor de 18 años</p>`
}
else {
    let Carnet = window.prompt("¿Tienes Carnet?");
    if (Carnet == "No") {
        div1.innerHTML = `
<p>No puedes alquilar el coche, no tienes carnet de conducir</p>`
    } else {
        let Nombre = window.prompt("¿Nombre?");
        let Apellido = window.prompt("¿Apellido?");
        let Ciudad = window.prompt("¿Ciudad de recogida?");
        let Dias = window.prompt("¿Cuántos días?");
        let total=0
        if (Dias == 7) {
            total = 150
        } else {
             total = 25 * Dias
        }
        div1.innerHTML = `
        <p>Nombre: ${Nombre}</p>
        <p>Apellido: ${Apellido}</p>
        <p>Ciudad: ${Ciudad}</p>
        <p>Dias: ${Dias}</p>
        <p>Total: ${total}</p>`
    }
}



