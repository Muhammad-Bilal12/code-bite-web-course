const loading = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let loadText = 0;

let int = setInterval(blurring, 30);

function blurring() {
  loadText++;

  if (loadText > 99) {
    clearInterval(int);
  }

  loading.innerText = `${loadText}%`;
  //   console.log(loadText);

  loading.style.opacity = scale(loadText, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(loadText, 0, 100, 30, 0)}px)`;
}

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
