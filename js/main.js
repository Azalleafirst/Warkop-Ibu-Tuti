// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika menu di klik
document.querySelector("#coffee-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
// klik diluar sidebar untuk menghilangkan navbar
const coffee = document.querySelector("#coffee-menu");
document.addEventListener("click", function (e) {
  if (!coffee.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
