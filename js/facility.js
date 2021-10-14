// JQUERY FOR OWL CAROUSEL
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 100,
    nav: true,
    dots: true,
    navText: [
      "<img class='customNextBtn' src='../assets/facilities/leftarrow.png'/>",
      "<img class='customPrevBtn' src='../assets/facilities/rightarrow.png'/>",
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        margin: 0,
      },
      550: {
        items: 2,
        margin: 10,
      },
      1000: {
        items: 3,
        dots: true,
      },
    },
  });
});
