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

  navbar.init();
});
