$(document).ready(function () {
  const navbar = {
    init() {
      $('.jsHamburguer').on('click', navbar.handleHamburguerClick);
      $('.jsMenuLink').on('click', navbar.closeMenu);
    },
    handleHamburguerClick() {
      $('.jsMenu').toggleClass('active');
      $('.jsHamburguer').toggleClass('active');

      document.body.style.overflowY === 'hidden'
        ? (document.body.style.overflowY = 'scroll')
        : (document.body.style.overflowY = 'hidden');
    },
    closeMenu() {
      $('.jsMenu').removeClass('active');
      $('.jsHamburguer').removeClass('active');
      document.body.style.overflowY = 'scroll';
    },
  };

  const slide = {
    init() {
      $('.jsSlide').slick({
        arrows: false,
        appendDots: $('.jsSlideDots'),
        dots: true,
        autoplay: true,
        infinte: false,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
      });
    },
  };

  slide.init();
  navbar.init();
  AOS.init();
});
