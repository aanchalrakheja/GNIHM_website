$(document).ready(function () {
  window.addEventListener("resize", CheckBrowserSize, false);
  function CheckBrowserSize() {
    var ResY = document.body.offsetWidth;
    console.log(ResY);
    if (ResY < 1000) {
      $("nav").css("background", "rgb(228, 64, 35)");
    }
  }
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var ResY = document.body.offsetWidth;
    if (ResY >= 1000) {
      console.log("called");
      if (scroll > 100) {
        $("nav").css("background", "rgb(228, 64, 35)");
      } else {
        $("nav").css("background", "transparent");
      }
    } else {
      $("nav").css("background", "rgb(228, 64, 35)");
    }
  });
});
