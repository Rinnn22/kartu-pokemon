// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika kartu diklik
document.querySelector("#kartu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// click diluar sidebar
const Kartu = document.querySelector("#kartu");

document.addEventListener("click", function (e) {
  if (!Kartu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
