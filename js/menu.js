// Seleccionamos el ícono del menú y el contenedor del menú
const mobileMenu = document.getElementById("mobile-menu");
const menu = document.querySelector(".menu");

// Agregamos un listener al ícono de menú para mostrar y ocultar el menú
mobileMenu.addEventListener("click", () => {
  menu.classList.toggle("active");
});
