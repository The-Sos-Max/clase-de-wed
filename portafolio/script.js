console.log("JavaScript está funcionando");




const inputEstudio = document.getElementById("input-estudio");

const botonEstudio = document.getElementById("boton-estudio");

const listaEstudios = document.getElementById("lista-estudios");


botonEstudio.addEventListener("click", function() {

    const texto = inputEstudio.value;

    if (texto.trim() === "") {
        return;
    }

    const nuevoEstudio = document.createElement("p");

    nuevoEstudio.textContent = texto;

    listaEstudios.appendChild(nuevoEstudio);

    inputEstudio.value = "";

});




const inputTrabajo = document.getElementById("input-trabajo");

const botonTrabajo = document.getElementById("boton-trabajo");

const listaTrabajos = document.getElementById("lista-trabajos");


botonTrabajo.addEventListener("click", function() {

    const texto = inputTrabajo.value;

    if (texto.trim() === "") {
        return;
    }

    const nuevoTrabajo = document.createElement("p");

    nuevoTrabajo.textContent = texto;

    listaTrabajos.appendChild(nuevoTrabajo);

    inputTrabajo.value = "";

});
