const openNav = document.querySelector(".hamburger");
const closeNav = document.querySelector(".close");
const menu = document.querySelector(".menu");

const leftPosition = menu.getBoundingClientRect().left;
openNav.addEventListener("click", () => {
  if (leftPosition < 0) {
    menu.classList.add("show");
  }
});

closeNav.addEventListener("click", () => {
  if (leftPosition < 0) {
    menu.classList.remove("show");
  }
});


/*
=============
Glide Js Carousel
=============
 */

const sliderr = document.getElementById("glider");




// Testimonial

if (sliderr) {
  new Glide("#glider", {
    type: "carousel",
    startAt: 0,
    perView: 1,
    rewin: false,
    animationDuration: 800,
    animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
  }).mount();
}



