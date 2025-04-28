// Bloquear click derecho
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

// Bloquear combinaciones de teclas peligrosas
document.addEventListener("keydown", function (e) {
  // F12
  if (e.key === "F12") {
    e.preventDefault();
  }
  // Ctrl+Shift+I (Herramientas)
  if (e.ctrlKey && e.shiftKey && e.key === "I") {
    e.preventDefault();
  }
  // Ctrl+Shift+J (Consola)
  if (e.ctrlKey && e.shiftKey && e.key === "J") {
    e.preventDefault();
  }
  // Ctrl+U (Ver código fuente)
  if (e.ctrlKey && e.key === "u") {
    e.preventDefault();
  }
});

// Detectar si la consola está abierta
(function () {
  const threshold = 160; // Ancho mínimo para detectar la consola
  setInterval(() => {
    if (
      window.outerWidth - window.innerWidth > threshold ||
      window.outerHeight - window.innerHeight > threshold
    ) {
    }
  }, 1000); // Comprobar cada segundo
})();
