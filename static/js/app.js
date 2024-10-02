const toggleButton = document.getElementById('toggleMenu');
const navLinks = document.getElementById('navLinks');

toggleButton.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.getElementById("year").textContent = new Date().getFullYear();
