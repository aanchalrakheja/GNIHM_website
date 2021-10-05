const toggleCollapse = document.querySelector(".toggle-collapse span");
const nav = document.querySelector(".nav");
// onclick event on toggle Collapse span tag
toggleCollapse.onclick = (e) => {
  nav.classList.toggle("collapse");
  e.target.classList.toggle("toggle-click");
};

$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".nav").addClass("sticky");
    } else {
      $(".nav").removeClass("sticky");
    }
  });
});

// JQUERY FOR OWL CAROUSEL
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        margin: 0,
      },
      550: {
        items: 1,
        margin: 0,
      },
      1000: {
        items: 1,
      },
    },
  });
});

$('.owl-carousel.partner-image-div').owlCarousel({
  center: true,
  margin:10,
  loop:true,
  autoplay:true,
  autoplayTimeout:3000,
  responsive:{
      0:{
          items:1,
          margin:1,

      },
      600:{
          items:1,
          margin:1,
      },
      1000:{
          items:3,
      }
  }
})

$('#faculty').owlCarousel({
  loop:true,
  margin:10,
 autoplay:true,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
  }
})
