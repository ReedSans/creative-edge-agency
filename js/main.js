document.addEventListener('DOMContentLoaded', ()=> {
  const hamburgerIcon = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('#mobileNav');
  hamburgerIcon.addEventListener('click', (e) => {
    mobileMenu.classList.toggle('active');
  });
})