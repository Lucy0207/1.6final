
import '../scss/style.scss'
import "./swiper"
import "./aside"
import "./modal-feedback"
import "./modal-call"


let button = document.querySelector(".brands__show-all");
let buttonText = button.querySelector("span");
let buttonIcon = button.querySelector("svg");
let hiddenElements = document.querySelectorAll(".brands__company");
let paragraph = document.querySelector(".brands__names")

let buttonEquipment = document.querySelector(".equipment__show-all");
let buttonEquipmentText = buttonEquipment.querySelector("span");
let buttonEquipmentIcon = buttonEquipment.querySelector("svg");
let hiddenEquipmentItems = document.querySelectorAll(".equipment__item");
let paragraphEquipment = document.querySelector(".equipment__types");



button.addEventListener("click", showHide);
buttonEquipment.addEventListener("click", showEquipment);

function showHide() {
  if (buttonText.textContent === "Показать все") {
    buttonText.textContent = "Скрыть";
    buttonIcon.classList.add("rotated");
    paragraph.classList.add("brands__names--extended-md");

    for (let i = 0; i < hiddenElements.length; i++) {
      hiddenElements[i].classList.remove("brands__company--hidden");
    }
  } else {
    buttonText.textContent = "Показать все";
    buttonIcon.classList.remove("rotated");
    paragraph.classList.remove("brands__names--extended-md");
  }
}

function showEquipment() {
  if (buttonEquipmentText.textContent === "Показать все") {
    buttonEquipmentText.textContent = "Скрыть";
    buttonEquipmentIcon.classList.add("rotated");
    paragraphEquipment.classList.add("equipment__types--extended");

    for (let i = 0; i < hiddenEquipmentItems.length; i++) {
      hiddenEquipmentItems[i].classList.remove("equipment__item--hidden");
    }
  } else {
    buttonEquipmentText.textContent = "Показать все";
    buttonEquipmentIcon.classList.remove("rotated");
    paragraphEquipment.classList.remove("equipment__types--extended");

  }
}







/*
document.addEventListener('DOMContentLoaded', function() {
  let button = document.querySelector(".brands__show-all");
  let buttonText = button.querySelector("span");
  let buttonIcon = button.querySelector("svg");
  let hiddenElements = document.querySelectorAll(".brands__company");
  let paragraph = document.querySelector(".brands__names");

  let buttonEquipment = document.querySelector(".equipment__show-all");
  let buttonEquipmentText = buttonEquipment.querySelector("span");
  let buttonEquipmentIcon = buttonEquipment.querySelector("svg");
  let hiddenEquipmentItems = document.querySelectorAll(".equipment__item");
  let paragraphEquipment = document.querySelector(".equipment__types");

  button.addEventListener("click", showHide);
  console.log("Button Equipment:", buttonEquipment);
  buttonEquipment.addEventListener("click", showEquipment);

  function showHide() {
    if (buttonText.textContent === "Показать все") {
      buttonText.textContent = "Скрыть";
      buttonIcon.classList.add("rotated");
      paragraph.classList.add("brands__names--extended-md");

      for (let i = 0; i < hiddenElements.length; i++) {
        hiddenElements[i].classList.remove("brands__company--hidden");
      }
    } else {
      buttonText.textContent = "Показать все";
      buttonIcon.classList.remove("rotated");
      paragraph.classList.remove("brands__names--extended-md");
    }
  }

  function showEquipment() {
    console.log("function!")
    if (buttonEquipmentText.textContent === "Показать все") {
      buttonEquipmentText.textContent = "Скрыть";
      buttonEquipmentIcon.classList.add("rotated");
      paragraphEquipment.classList.add("equipment__types--extended");

      for (let i = 0; i < hiddenEquipmentItems.length; i++) {
        hiddenEquipmentItems[i].classList.remove("equipment__item--hidden");
      }
    } else {
      buttonEquipmentText.textContent = "Показать все";
      buttonEquipmentIcon.classList.remove("rotated");
      paragraphEquipment.classList.remove("equipment__types--extended");
    }
  }
});
*/
/*

function showAllBrands() {
  const hiddenBrands = document.querySelectorAll('.brands__company--hidden');

  let buttonText = showAllBrandsButton.querySelector("span");
  let buttonIcon = showAllBrandsButton.querySelector("svg");
  let hiddenElements = document.querySelectorAll(".brands__company");
  let paragraph = document.querySelector(".brands__names")
  hiddenBrands.forEach((brand) => {
    brand.classList.remove('brands__company--hidden');
    buttonText.textContent = "Скрыть";
    buttonIcon.classList.add("rotated");
    paragraph.classList.add("brands__names--extended-md");
  });
}

// Функция для обработки нажатия на кнопку "Показать все" брендов
const showAllBrandsButton = document.querySelector('.brands__show-all');
showAllBrandsButton.addEventListener('click', showAllBrands);

// Функция для показа скрытых элементов видов техники
function showAllEquipmentTypes() {
  const hiddenEquipmentTypes = document.querySelectorAll('.equipment__item--hidden');

  let buttonEquipmentText = showAllEquipmentButton.querySelector("span");
  let buttonEquipmentIcon = showAllEquipmentButton.querySelector("svg");
  let hiddenEquipmentItems = document.querySelectorAll(".equipment__item");
  let paragraphEquipment = document.querySelector(".equipment__types");

  hiddenEquipmentTypes.forEach((type) => {
    type.classList.remove('equipment__item--hidden');
    buttonEquipmentText.textContent = "Скрыть";
    buttonEquipmentIcon.classList.add("rotated");
    paragraphEquipment.classList.add("equipment__types--extended");


  });
}

// Функция для обработки нажатия на кнопку "Показать все" видов техники
const showAllEquipmentButton = document.getElementById("#equipclick");
showAllEquipmentButton.addEventListener('click', showAllEquipmentTypes);



*/
