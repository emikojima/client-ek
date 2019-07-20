// Preloader
$(window).on('load', () => {
  $("#status").fadeOut();
  $("#preloader").delay(350).fadeOut('slow');
});
// Team
//$(document).ready(function(){...} shortened to $(function(){...})
$(function() {
  $("#team-members").owlCarousel({
    items: 2,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>']
  });
});

// Progress Bars
$(function() {
  $("#progress-elements").waypoint(function() {
    $(".progress-bar").each(function() {
      $(this).animate({
        width: $(this).attr("aria-valuenow") + "%"
      }, 1000);
    });
    this.destroy();
  }, {
    offset: 'bottom-in-view'
  });
});

// Navigation
$(function() {
  showHideNav();
  $(window).scroll(function(){
    showHideNav();
  });

  function showHideNav() {
    if($(window).scrollTop() > 50) {
      $("nav").addClass("white-nav-top");
      $(".navbar-brand img").attr("src", "img/logo/logo-dark.png")
    } else {
      $("nav").removeClass("white-nav-top");
      $(".navbar-brand img").attr("src", "img/logo/logo.png")
    }
  }
})

// NOTE: Smooth scrolling

$(function() {
  $("a.smooth-scroll").click(function(event) {
    event.preventDefault();
    //get section id eg: #about, #home, etc.
    const section_id = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(section_id).offset().top
    }, 1250)
  })
})

//fetch blog
$(function() {
  fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@emi8emi')
   .then((res) => res.json())
   .then((data) => {
      console.log(data.items)
      data.items.map(i => console.log(i.title, i.content))
      data.items.map(i => $('.blog-title').html(i.title))
    })
})
