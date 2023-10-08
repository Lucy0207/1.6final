const headerCallButton = document.querySelector(".header-call");
const asideCallButton = document.querySelector(".modal__call-open");
const closeCallButton = document.querySelector(".modal-close__call");
const wrapper = document.querySelector(".wrapper");

const modalCall = document.querySelector(".modal-call");

headerCallButton.addEventListener("click", openCallModal);
asideCallButton.addEventListener("click", openCallModal);
closeCallButton.addEventListener("click", closeCallModal);

function openCallModal() {
  modalCall.classList.add("modal-call--visible");
  wrapper.style.opacity = "0.1";
}

function closeCallModal() {
  modalCall.classList.remove("modal-call--visible");
  wrapper.style.opacity = "1";
}

