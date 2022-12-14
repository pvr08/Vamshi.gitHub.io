const navList = document.getElementById("nav-list");
const navBurger = document.getElementById("nav-burger");

navBurger.addEventListener("click", () => {
  navList.classList.toggle("show");
});
