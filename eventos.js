const div = document.getElementById("divbuton");
const boton = document.getElementById("clicbuton");

boton.addEventListener("click", function(event) {
  event.stopPropagation();
  alert("Hola!");
});

div.addEventListener("click", function() {
  alert("Hola, soy el div");
});