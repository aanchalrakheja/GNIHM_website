const videoGallery=document.getElementById("video-gallery");
const imageGallery=document.getElementById("image-gallery");
const imageButton=document.getElementById("image-button");
const videoButton=document.getElementById("video-button");
// videoGallery.style.display="none";

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

const modal=document.getElementsByClassName("modal");
const closeModal=document.getElementsByClassName("close-modal");
const Images=document.getElementsByClassName("gallery-image");
const modalImage=document.getElementById("modal-img");
var currentImage=0;
modal[0].style.display="none";

closeModal[0].addEventListener("click",function(){
  modal[0].style.display="none";
});

function imageModal(n)
{
  currentImage=n;
  const currentImageSrc=Images[n].src;
  modalImage.src=currentImageSrc;
  modal[0].style.display="flex";
}

function Navigate(x){
  currentImage+=x;
  if(currentImage>=Images.length)
  {
    currentImage=0;
  }
  if(currentImage<0)
  {
    currentImage=Images.length-1;
  }
  modalImage.src=Images[currentImage].src;
}
