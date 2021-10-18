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
    margin: 0,
    nav: true,
    dots: false,
    responsiveClass: true,
    navText: [
      "<img class='customNextBtn' src='assets/Facilities/leftarrow.png'/>",
      "<img class='customPrevBtn' src='assets/Facilities/rightarrow.png'/>",
    ],
    responsive: {
      0: {
        items: 1,
        margin: 0,
        nav: false,
      },

      500: {
        items: 1,
        margin: 0,
        nav: false,
      },
      900: {
        items: 1,
        margin: 0,
      },
      1000: {
        items: 1,
      },
    },
  });
});

$('.partner-image-div').owlCarousel({
  center: true,
  margin:10,
  loop:true,
  dots: false,
  autoplay: true,
  autoplaySpeed: 4000,
  smartSpeed: 4000,
  center: true,
  responsive:{
      0:{
          items:1,
          margin:0,

      },
      600:{
          items:2,
          margin:0,
      },
      1000:{
          items:4,
      }
  }
})

