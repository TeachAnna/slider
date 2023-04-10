let next = document.querySelector("#next");
let pred = document.querySelector("#pred");

let images = document.querySelectorAll("img");

let i = 0;

next.addEventListener("click", () => {
  images[i].className = "";
  i++;
  if (i >= images.length) i = 0;
  images[i].className = "show";
});

pred.addEventListener("click", () => {
  images[i].className = "";
  i--;
  if (i < 0) i = images.length - 1;
  images[i].className = "show";
});
