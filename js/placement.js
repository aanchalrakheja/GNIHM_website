$(document).ready(function () {
  $("#brand-carasouel").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    navText: [
      "<img class='customPrevBtn' src='./assets/placements/backward.svg'/>",
      "<img class='customNextBtn' src='./assets/placements/forward.svg'/>",
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        margin: 60,
        nav: false,
      },
      810: {
        items: 2,
        margin: 100,
        nav: false,
      },
      1284: {
        items: 3,
        margin: 60,
        
      },
    },
  });
});


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



$(document).ready(function () {
  $("#testimonial-carasouel").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: true,
    navText: [
      "<img class='PrevBtn' src='assets/placements/previous.svg'/>",
      "<img class='NextBtn' src='assets/placements/next.svg'/>",
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        margin: 60,
        nav: false,
      },
      810: {
        items: 1,
        margin: 100,
        nav: false,
      },
      1284: {
        items: 1,
        margin: 60,
        
      },
    },
  });
});