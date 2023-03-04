"use strict";
const splash = document.getElementById("splash");
const splashHeight = `${splash.offsetHeight}`;

console.log(splashHeight);

document.querySelector("main").onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.querySelector("main").scrollTop > splashHeight / 2) {
    console.log("hey");
    document.getElementById("splash").classList.add("scroll");
  } else {
    console.log("ho");
  }
}
