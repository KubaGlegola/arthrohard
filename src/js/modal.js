const modalHandler = document.querySelector("#modal");
const backdropHandler = modalHandler.querySelector(".modal__backdrop");
const closeButtonHandler = modalHandler.querySelector(".modal__closeButton");
const modalContentHandler = modalHandler.querySelector(".modal__content");

const closeModal = () => {
  modalHandler.classList.remove("modal--visible");
};

export const openModal = (content) => {
  modalContentHandler.innerHTML = content;
  modalHandler.classList.add("modal--visible");
};

backdropHandler.addEventListener("click", () => {
  closeModal();
});

closeButtonHandler.addEventListener("click", () => {
  closeModal();
});
