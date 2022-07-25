const navlinks = document.querySelector(".navlinks");
const menu = document.querySelector(".menu");
const menuBtn = document.getElementById("menuBtn");

navlinks.style.right = "-250px";

menu.addEventListener("click", () => {
  if (navlinks.style.right == "-250px") {
    navlinks.style.right = "0px";
    menuBtn.src = "assets/close.png";
  } else {
    navlinks.style.right = "-250px";
    menuBtn.src = "assets/bars.png";
  }
});
