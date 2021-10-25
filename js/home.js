// JQUERY FOR OWL CAROUSEL
$(document).ready(function () {
  $(".carousel-2").owlCarousel({
    margin: 100,
    nav: true,
    dots: true,
    navText: [
      "<img class='customNextBtn' src='/assets/facilities/leftarrow.png'/>",
      "<img class='customPrevBtn' src='/assets/facilities/rightarrow.png'/>",
    ],
    responsiveClass: true,
    responsive: {
      0: {
        loop: true,
        items: 1,
        margin: 100,
        nav: false,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 3,
        margin: 24,
      },
      1200: {
        items: 4,
        margin: 0,
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
      "<img class='customNextBtn' src='/assets/facilities/leftarrow.png'/>",
      "<img class='customPrevBtn' src='/assets/facilities/rightarrow.png'/>",
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        dots: true,
        mouseDrag: true,
        nav: false,
        margin: 10,
      },
      600: {
        items: 2,
        dots: true,
        nav: false,
        mouseDrag: true,
        margin: 24,
      },
      1000: {
        items: 3,
        dots: true,
        nav: false,
        mouseDrag: true,
        margin: 24,
      },
      1200: {
        items: 4,
        margin: 60,
        dots: false,
        nav: false,
        mouseDrag: false,
      },
    },
  });
});
// $(document).ready(function () {
//   $("#news-carousel").owlCarousel({
//     nav: true,
//     dots: true,
//     margin: 10,
//     navText: [
//       "<img class='customNextBtn' src='./assets/facilities/leftarrow.png'/>",
//       "<img class='customPrevBtn' src='./assets/facilities/rightarrow.png'/>",
//     ],
//     responsiveClass: true,
//     responsive: {
//       0: {
//         items: 1,
//         dots:true,
//         mouseDrag:true,
//         margin:10
//       },
//       550: {
//         items: 1,
//         dots:true,
//         mouseDrag:true,
//         margin:10
//       },
//       1000: {
//         items: 1,
//         dots:true,
//         mouseDrag:true,
//         margin:10
//       },
//     },
//   });
// });

// $(document).ready(function () {
//   $("#awards-carousel").owlCarousel({
//     nav: true,
//     dots: true,
//     margin: 10,
//     navText: [
//       "<img class='customNextBtn' src='./assets/facilities/leftarrow.png'/>",
//       "<img class='customPrevBtn' src='./assets/facilities/rightarrow.png'/>",
//     ],
//     responsiveClass: true,
//     responsive: {
//       0: {
//         items: 1,
//         dots:true,
//         mouseDrag:true,
//         margin:10
//       },
//       550: {
//         items: 1,
//         dots:true,
//         mouseDrag:true,
//         margin:10
//       },
//       1000: {
//         items: 1,
//         dots:true,
//         mouseDrag:true,
//         margin:10
//       },
//     },
//   });
// });

$(document).ready(function () {
  $(".testimonial-carousel").owlCarousel({
    nav: true,
    dots: true,
    margin: 10,
    navText: [
      "<img class='customNextBtn' src='./assets/facilities/leftarrow.png'/>",
      "<img class='customPrevBtn' src='./assets/facilities/rightarrow.png'/>",
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      730: {
        items: 2,
      },
      1050: {
        items: 3,
      },
    },
  });
});

$(document).ready(function () {
  $(".alumni-carousel").owlCarousel({
    nav: true,
    loop: true,
    dots: true,
    margin: 10,
    navText: [
      "<img class='customNextBtn' src='./assets/facilities/leftarrow.png'/>",
      "<img class='customPrevBtn' src='./assets/facilities/rightarrow.png'/>",
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
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

$(document).ready(function () {
  $(".placement-carousel").owlCarousel({
    loop: true,
    autoplayTimeout: 2000,
    nav: true,
    dots: true,
    margin: 10,
    autoplay: true,
    navText: [
      "<img class='customNextBtn' src='./assets/facilities/leftarrow.png'/>",
      "<img class='customPrevBtn' src='./assets/facilities/rightarrow.png'/>",
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      500: {
        items: 2,
        nav: false,
      },
      700: {
        items: 3,
      },
      950: {
        items: 4,
      },
      1200: {
        items: 5,
      },
    },
  });
});

// news carousel
var newscards = document.getElementsByClassName("news-card");
var awardscards = document.getElementsByClassName("awards-card");
var newscount = 0;
var awardscount = 0;
function newsCarousel(num) {
  newscount += num;
  if (newscount >= newscards.length) {
    newscount = 0;
  }
  if (newscount < 0) {
    newscount = newscards.length - 1;
  }
  for (let i = 0; i < newscards.length; i++) {
    newscards[i].style.display = "none";
  }
  newscards[newscount].style.display = "block";
}

function awardsCarousel(num) {
  awardscount += num;
  if (awardscount >= awardscards.length) {
    awardscount = 0;
  }
  if (awardscount < 0) {
    awardscount = awardscards.length - 1;
  }
  for (let i = 0; i < awardscards.length; i++) {
    awardscards[i].style.display = "none";
  }
  awardscards[awardscount].style.display = "block";
}

newsCarousel(0);
awardsCarousel(0);
setInterval(() => {
  newsCarousel(1);
}, 4500);
setInterval(() => {
  awardsCarousel(1);
}, 4500);


// gallery carousel
const modal=document.getElementsByClassName("modals");
const closeModal=document.getElementsByClassName("close-modal-button");
const Videos=document.getElementsByClassName("gallery-video");
const modalVideo=document.getElementsByClassName("modal-video");
var currentVideo=0; 
modal[0].style.display="none";


closeModal[0].addEventListener("click",function(){
    modal[0].style.display="none";
  });

function videoModal(n)
{
    currentVideo=n;
    for(var i=0;i<modalVideo.length;i++)
    {
        modalVideo[i].style.display="none";
    }
    modalVideo[n].style.display="block";
    modal[0].style.display="flex";
} 

function NavigateVideo(y)
{
    currentVideo+=y;
  if(currentVideo>=Videos.length)
  {
    currentVideo=0;
  }
  if(currentVideo<0)
  {
    currentVideo=Videos.length-1;
  }
  for(var a=0;a<modalVideo.length;a++)
  {
      modalVideo[a].style.display="none";
  }
  modalVideo[currentVideo].style.display="block";
}