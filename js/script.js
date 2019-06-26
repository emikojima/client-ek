// Preloader
$(window).on('load', () => {
  $("#status").fadeOut();
  $("#preloader").delay(350).fadeOut('slow');
});
// Team
//$(document).ready(function(){...} shortened to $(function(){...})
$(function(){
  $("#team-members").owlCarousel({
    items: 2,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause:true,
    nav: true,
    dots: false,
    navText:['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>']
  });
});
