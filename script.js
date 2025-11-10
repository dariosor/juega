// ✨ Pequeña animación de texto al cargar
document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector("h1 span");
  if (title) {
    title.style.transition = "all 1.5s ease";
    title.style.textShadow = "0 0 25px #ffea00, 0 0 45px #b26ffb";
  }
});
// ✅ Mostrar puntos acumulados desde localStorage
document.addEventListener("DOMContentLoaded", () => {
  const puntos = localStorage.getItem("puntos") || 0;
  const spanPuntos = document.getElementById("puntos");
  if (spanPuntos) spanPuntos.textContent = puntos;
});

// ✅ Función para ir al juego seleccionado con configuración guardada
function jugar(pagina) {
  const materia = document.getElementById("materia").value;
  const modo = document.getElementById("modo").value;

  // Guardamos los valores seleccionados para usarlos en cada juego
  localStorage.setItem("materia", materia);
  localStorage.setItem("modo", modo);

  // Redirigir al juego seleccionado
  window.location.href = pagina;
}

// ✅ Función para sumar puntos desde los juegos
function sumarPuntos(cantidad) {
  let puntos = parseInt(localStorage.getItem("puntos") || "0");
  puntos += cantidad;
  localStorage.setItem("puntos", puntos);
}
