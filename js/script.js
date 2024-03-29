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
  $(window).scroll(function() {
    showHideNav();
  });

  function showHideNav() {
    if ($(window).scrollTop() > 50) {
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

// //fetch blog
$(function() {
  fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@emi8emi')
    .then((res) => res.json())
    .then((data) => {
      console.log(data.items)
      const posts = data.items.slice(0,4)
      // data.items.map(i => console.log(i.title, i.content))
      // data.items.map(i => $('.blog-title').append($("<li>" + i.title+"</li>"+"<p>"+i.content+"</p>")))
      function shortenText(text, startingPoint, maxLength) {
        return text.length > maxLength ?
          text.slice(startingPoint, maxLength) :
          text
      }

      let output = '';
      posts.forEach((item) => {
        output += `
          <div class="col-md-6">
            <li class="blog-post">

                  <img src="${item.thumbnail}" class="blog-topImg"></img>
                  <div class="blog-content">
                     <div class="blog-preview">
                        <h3 class="blog-title">${shortenText(item.title, 0, 30) + ' ...' }</h2>
                        <p class="blog-intro">${'' + shortenText((item.content),0, 200)+ '...' + `<a href="${item.link}">READ MORE</a>`}</p>
                     </div>

                     <div class="blog-info">
                        <span class="blog-author">By: ${item.author}</span>
                        <span class="blog-date">${shortenText(item.pubDate,0 ,10)}</span>
                     </div>
                  </div>

            </li>
            <hr>
            </div>`
      })
      document.querySelector('.blog').innerHTML = output
    })

})
