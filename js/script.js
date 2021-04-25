// design section panels
let panels = document.querySelectorAll(".panel");

// navbar
const nav = document.getElementById("nav-pc");
const navMb = document.getElementById("nav-mobile");
const menuModel = document.querySelector(".menu-model");
const lines = document.querySelectorAll(".bar");

// design section panels
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panels) => {
    panels.classList.remove("active");
  });
}

// navbar transform
window.addEventListener("scroll", () => {
  // console.log(window.scrollY);
  if (window.scrollY > 200) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
});

navMb.addEventListener("click", () => {
  menuModel.classList.toggle("active");
  navMb.classList.toggle("active");
});

// jquery support smooth scroll
$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});
