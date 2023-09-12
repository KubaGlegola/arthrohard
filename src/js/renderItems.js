import { openModal } from "./modal";

const itemsContainerHandler = document.querySelector(
  ".products__itemsContainer"
);

export const renderItem = (id, name, value) => {
  const element = document.createElement("div");
  element.classList.add("products__item");
  element.innerHTML = "ID: " + id;
  element.addEventListener("click", () => {
    openModal(
      `<div class='modal__contentName'>${name}</div><div class='modal__contentValue'>Wartość: ${value}</div>`
    );
  });
  itemsContainerHandler.appendChild(element);
};

export const clearContainer = () => {
  itemsContainerHandler.innerHTML = "";
};
