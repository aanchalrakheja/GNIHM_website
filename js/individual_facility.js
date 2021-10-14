$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
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
        margin: 55,
        nav: false,
      },
      895: {
        items: 2,
        margin: 100,
      },
      1284: {
        items: 3,
        margin: 100,
      },
    },
  });
});
