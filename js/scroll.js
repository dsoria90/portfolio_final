// Seleccionamos el botón
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Mostrar el botón cuando se desplace hacia abajo
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) { // Mostrar después de 100px
    scrollToTopBtn.classList.add('show');
  } else {
    scrollToTopBtn.classList.remove('show');
  }
});

// Al hacer clic, desplazarse al principio
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Desplazamiento suave
  });
});

