// Seleccionar por ID
const titulo = document.querySelector("#titulo");
titulo.style.color = "blue";

// Seleccionar por clase
const parrafo = document.querySelector(".texto");
parrafo.textContent = "Texto modificado con querySelector";

// Seleccionar por etiqueta
const boton = document.querySelector("button");
boton.addEventListener("click", () => {
  alert("Botón presionado");
});