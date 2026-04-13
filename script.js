const navbar = document.querySelector('.navbar');

function handleScroll() {
  if (window.scrollY > 0) {
    navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
  } else {
    navbar.style.backgroundColor = '#222222';
  }
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll); // Ensures correct color on page load
