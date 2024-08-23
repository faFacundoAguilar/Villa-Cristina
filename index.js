const options = {
  accessibility: true,
  prevNextButtons: true,
  pageDots: true,
  setGallerySize: false,
  arrowShape: {
      x0: 1,
      x1: 58,
      y1: 62,
      x2: 55,
      y2: 48,
      x3: 18
  }
};

// Función para ajustar la posición del fondo de las diapositivas
function setBgPosition(slide, index) {
  const x = -(slide.target + flkty.x) / 3;
  slides[index].style.backgroundPosition = `${x}px`;
}

//  Para activar el carrusel
const carousel = document.querySelector('[carousel]');
const slides = Array.from(document.getElementsByClassName('carousel-cell'));
const flkty = new Flickity(carousel, options);

// Listener para ajustar la posición del fondo al hacer scroll
flkty.on('scroll', () => {
  flkty.slides.forEach(setBgPosition);
});

// JavaScript para mantener fijo el header al hacer scroll.
let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', function() {
  let scrollTop = window.scrollY;
  if (scrollTop > lastScrollTop) {
      // Desplazándose hacia abajo 
      header.classList.add('-translate-y-full');
  } else {
      // Desplazándose hacia arriba
      header.classList.remove('-translate-y-full');
  }
  lastScrollTop = scrollTop;
});


