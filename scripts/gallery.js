"use strict";

//variables
var index = 1;
var i;
var gallerySlides = document.getElementsByClassName("pictures");
var circle = document.getElementsByClassName("slides-circle");

scroll(index);

function current(num) {
  scroll(index = num);
}

function scroll(num) {
  if (num > gallerySlides.length) { 
    index = 1 
  }

  if (num < 1) { 
    index = gallerySlides.length 
  }

  for (i = 0; i < gallerySlides.length; i++) {
    gallerySlides[i].style.display = "none";
  }

  for (i = 0; i < circle.length; i++) {
    circle[i].className = circle[i].className.replace(" active", "");
  }
  
  gallerySlides[index - 1].style.display = "block";
  circle[index - 1].className += " active";
}