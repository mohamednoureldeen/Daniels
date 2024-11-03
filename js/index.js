// navbar Scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar-example');
    if (window.scrollY > window.innerHeight) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // animated typing

  var typed = new Typed('#element', {
    strings: ['Larry Daniels', 'Developer', 'Designer'],
    typeSpeed: 150,
    backSpeed: 25,
    loop: true
  });