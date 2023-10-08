const headerButton = document.querySelector(".header-feedback");
const asideButton = document.querySelector(".modal__feedback-open");
const closeFeedbackButton = document.querySelector(".modal-close__feedback");
const wrapper = document.querySelector(".wrapper");

const modalFeedback = document.querySelector(".modal-feedback");

headerButton.addEventListener("click", openModal);
asideButton.addEventListener("click", openModal);
closeFeedbackButton.addEventListener("click", closeModal);

function openModal() {
  modalFeedback.classList.add("modal-feedback--visible");
  wrapper.style.opacity = "0.1";
}

function closeModal() {
  modalFeedback.classList.remove("modal-feedback--visible");
  wrapper.style.opacity = "1";
}

