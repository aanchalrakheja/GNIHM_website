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
        margin: 35,
        dots: false,
        nav: false,
        mouseDrag: false,
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
        mouseDrag: true,
        nav: false,
        margin: 100,
      },
      550: {
        items: 1,
        dots: true,
        nav: false,
        mouseDrag: true,
        margin: 24,
      },
      1000: {
        items: 4,
        margin: 60,
        dots: false,
        nav: false,
        mouseDrag: false,
      },
    },
  });
});
$(document).ready(function () {
  $(".news-carousel").owlCarousel({
    nav: true,
    dots: true,
    margin: 10,
    navText: [
      "<img class='customNextBtn' src='../assets/Facilities/leftarrow.png'/>",
      "<img class='customPrevBtn' src='../assets/Facilities/rightarrow.png'/>",
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      550: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});
