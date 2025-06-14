const phoneHeader = document.querySelector("#phone-header");
const menuBar = document.querySelector("#menu");
const phoneMenuBar = document.querySelector("#hidden");
const closeNav = document.querySelector(".cross");
menuBar.addEventListener("click", () => {
   phoneHeader.style.flexDirection = "column";
  phoneHeader.style.justifyContent = "center";
  phoneMenuBar.style.display = "flex";
  menuBar.style.display = "none";
});
closeNav.addEventListener("click", () => {
    phoneHeader.style.flexDirection = "row";
  phoneMenuBar.style.display = "none";
   phoneHeader.style.justifyContent = "space-between";
    menuBar.style.display = "inline";
});
