// get elements
const images = document.querySelector(".images");
const left = document.querySelector(".fa-angle-double-left");
const right = document.querySelector(".fa-angle-double-right");

// constants
const shevrons = [left, right];
const options = {
  left: "fa-angle-double-left",
  right: "fa-angle-double-right",
};
let timer;
let amount = 0;
const max = 0;
const min = -2000;
const step = images.clientWidth;

// functions

function handleClick(e) {
  const targetClass = e.target.classList[1];
  if (targetClass === options.right) {
    clearInterval(timer);
    imageRightSlide();
    timer = setInterval(imageRightSlide, 2800);
  } else {
    clearInterval(timer);
    imageLeftSlide();
    timer = setInterval(imageRightSlide, 2800);
  }
}

function imageRightSlide() {
  amount === min ? (amount = max) : (amount -= step);
  images.style.left = `${amount}px`;
}
function imageLeftSlide() {
  amount === max ? (amount = min) : (amount += step);
  images.style.left = `${amount}px`;
}

// eventListeners

shevrons.forEach((shevron) => shevron.addEventListener("click", handleClick));

// init
timer = setInterval(imageRightSlide, 2800);
