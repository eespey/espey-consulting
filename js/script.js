document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
  
    if (!hamburger || !navLinks || !hamburgerIcon) {
      console.error('Hamburger, nav-links, or icon not found!');
      return;
    }
  
    hamburger.addEventListener('click', function() {
      this.classList.toggle('active');
      navLinks.classList.toggle('active');
      hamburgerIcon.textContent = this.classList.contains('active') ? '✕' : '☰';
    });
  });