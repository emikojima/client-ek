// Preloader
$(window).on('load', () => {
  $("#status").fadeOut();
  $("#preloader").delay(350).fadeOut('slow');
});
