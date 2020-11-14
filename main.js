// const slideshowImages = document.querySelectorAll(".intro-slideshow img");

// const nextImageDelay = 3000;
// let currentImageCounter = 0; // setting a variable to keep track of the current image (slide)

// // slideshowImages[currentImageCounter].style.display = "block";
// slideshowImages[currentImageCounter].style.opacity = 1;

// setInterval(nextImage, nextImageDelay);

// function nextImage() {
//   // slideshowImages[currentImageCounter].style.display = "none";
//   slideshowImages[currentImageCounter].style.opacity = 0;

//   currentImageCounter = (currentImageCounter+1) % slideshowImages.length;

//   // slideshowImages[currentImageCounter].style.display = "block";
//   slideshowImages[currentImageCounter].style.opacity = 1;
// }
const slideshowImages = document.querySelectorAll(".intro .slideshow-img");

const nextImageDelay = 3000;
let currentImageCounter = 0;

// slideshowImages[currentImageCounter].style.display = "block";
slideshowImages[currentImageCounter].style.opacity = "1";

setInterval(nextImage, nextImageDelay);

function nextImage() {
  slideshowImages[currentImageCounter].style.opacity = "0";
  currentImageCounter = (currentImageCounter+1) % slideshowImages.length;
  slideshowImages[currentImageCounter].style.opacity = "1";
}

$(window).load(function() {
  // Animate loader off screen
  $(".se-pre-con").fadeOut("slow");;
});