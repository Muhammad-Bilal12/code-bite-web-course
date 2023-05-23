$(document).ready(function () {
  $(".slider").slick({
    arrows: false,
    dots: true,
    appendDots: ".slider-dots",
    dotsClass: "dots",
  });

  let hemberger = document.querySelector(".hemberger");
  let times = document.querySelector(".times");
  let mobile_nav = document.querySelector(".mobile-nav");

  hemberger.addEventListener("click", function () {
    mobile_nav.classList.add("open");
  });

  times.addEventListener("click", function () {
    mobile_nav.classList.remove("open");
  });
});
