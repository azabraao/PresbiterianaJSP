$(document).ready(function () {
  const navbar = {
    init() {
      $('.jsHamburguer').on('click', navbar.handleHamburguerClick);
    },
    handleHamburguerClick() {
      $('.jsMenu').toggleClass('active');
      $('.jsHamburguer').toggleClass('active');

      document.body.style.overflowY === 'hidden'
        ? (document.body.style.overflowY = 'scroll')
        : (document.body.style.overflowY = 'hidden');
    },
  };

  const slide = {
    init() {
      $('.jsSlide').slick({
        arrows: false,
        appendDots: $('.jsSlideDots'),
        dots: true,
      });
    },
  };

  slide.init();
  navbar.init();
  AOS.init();
});
