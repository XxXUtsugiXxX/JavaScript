// Seleccionar por ID
const titulo = document.querySelector("#titulo");
titulo.style.color = "blue";

// Seleccionar por clase
const parrafo = document.querySelector(".texto");
parrafo.textContent = "es mejor porque es más flexible, usa selectores CSS, hace el código más limpio y evita trabajar con colecciones innecesarias.";

// Seleccionar por etiqueta
const boton = document.querySelector("button");
boton.addEventListener("click", () => {
  alert("Botón presionado");
});