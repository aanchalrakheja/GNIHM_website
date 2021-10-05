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
  $(".carousel-2").owlCarousel({
    loop: true,
    margin: 100,
    nav: true,
    dots: true,
    navText: [
      "<img class='customNextBtn' src='/assets/Facilities/leftarrow.png'/>",
      "<img class='customPrevBtn' src='/assets/Facilities/rightarrow.png'/>",
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        margin: 100,
      },
      550: {
        items: 1,
        margin: 24,
      },
      1000: {
        items: 4,
        margin:35,
        dots: false,
        nav:false,
        mouseDrag:false,
      },
    },
  });
});

$(document).ready(function () {
  $(".carousel-1").owlCarousel({
    margin: 100,
    nav: true,
    dots: true,
    navText: [
      "<img class='customNextBtn' src='/assets/Facilities/leftarrow.png'/>",
      "<img class='customPrevBtn' src='/assets/Facilities/rightarrow.png'/>",
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        dots: true,
        mouseDrag:true,
        nav: false,
        margin: 100,
      },
      550: {
        items: 1,
        dots: true,
        nav: false,
        mouseDrag:true,
        margin: 24,
      },
      1000: {
        items: 4,
        margin:60,
        dots: false,
        nav:false,
        mouseDrag:false,
      },
    },
  });
});
