$(document).ready(function () {
  const navbar = {
    init() {
      $('.jsHamburguer').on('click', navbar.handleHamburguerClick);
    },
    handleHamburguerClick() {
      $('.jsMenu').toggleClass('active');
      $('.jsHamburguer').toggleClass('active');
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
});
