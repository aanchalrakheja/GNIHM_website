$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: true,
    navText: [
      "<img class='customNextBtn' src='../assets/Facilities/leftarrow.png'/>",
      "<img class='customPrevBtn' src='../assets/Facilities/rightarrow.png'/>",
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        margin: 55,
        nav: false,
      },
      810: {
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
