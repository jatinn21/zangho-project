"use strict";

let container = document.querySelector("#carosuel");

function newPicFetch(apiCall = "https://dog.ceo/api/breeds/image/random") {
  fetch(apiCall)
    .then((resp) => resp.json())
    .then((data) => changeImage(data.message));
}

newPicFetch();

function changeImage(imageURL) {
  container.style.backgroundImage = `url(${imageURL})`;
  setTimeout(newPicFetch, 10000);
}
// window.onload = changeImage();
container.addEventListener("load", newPicFetch);

document.querySelector("#contact").addEventListener("click", function () {
  if (!document.querySelector("#overlay").classList.contains("active")) {
    document.querySelector("#overlay").classList.add("active");
  } else {
    document.querySelector("#overlay").classList.remove("active");
  }
});

document.querySelector(".cancel_area").addEventListener("click", function (e) {
  e.preventDefault();
  if (document.querySelector("#overlay").classList.contains("active")) {
    document.querySelector("#overlay").classList.remove("active");
  } else {
    document.querySelector("#overlay").classList.add("active");
  }
});
