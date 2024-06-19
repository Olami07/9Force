const hamburger = document.querySelector("#toggle-btn");

hamburger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});

// JavaScript to hide the preloader
window.addEventListener("load", function () {
  document.body.classList.remove("loading");
  setTimeout(function () {
    document.getElementById("preloader").style.display = "none";
  }, 1500); // Match the duration of the fade-out effect
});
