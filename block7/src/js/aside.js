let burger = document.querySelector(".header__burger");
let sidebar = document.querySelector(".aside");
let closeButton = document.querySelector(".aside__close-button");
let blur = document.querySelector(".content");

burger.addEventListener("click", function () {
  sidebar.classList.add("aside--visible");
  blur.classList.add("content--blurred");
})

closeButton.addEventListener("click", function () {
  sidebar.classList.remove("aside--visible");
  blur.classList.remove("content--blurred");
})
