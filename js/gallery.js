const toggleCollapse = document.querySelector(".toggle-collapse span");
const nav = document.querySelector("#nav");
// onclick event on toggle Collapse span tag
toggleCollapse.onclick = (e) => {
  nav.classList.toggle("collapse");
  e.target.classList.toggle("toggle-click");
};

$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $("#nav").addClass("sticky");
    } else {
      $("#nav").removeClass("sticky");
    }
  });
});

const videoGallery=document.getElementById("video-gallery");
const imageGallery=document.getElementById("image-gallery");
const imageButton=document.getElementById("image-button");
const videoButton=document.getElementById("video-button");
videoGallery.style.display="none";

function callImages(){
    imageButton.classList.add("active");
    videoButton.classList.remove("active");
    videoGallery.style.display="none";
    imageGallery.style.display="flex";
}

function callVideos(){
    imageButton.classList.remove("active");
    videoButton.classList.add("active");
    videoGallery.style.display="flex";
    imageGallery.style.display="none"; 
}
