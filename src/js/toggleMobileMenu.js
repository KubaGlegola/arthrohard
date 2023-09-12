export const toggleMobileMenu = () => {
  const burgerButtonHandler = document.querySelector("#burgerButton");
  const mobileNavHandler = document.querySelector("#mobileNav");
  const mobileNavLinksHandler = document.querySelectorAll(
    ".mobileNav_menuItem"
  );

  window.addEventListener("click", () => {
    burgerButtonHandler.classList.remove("header__burgerButton--active");
    mobileNavHandler.classList.remove("mobileNav--visible");
  });

  mobileNavLinksHandler.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.stopPropagation();
      burgerButtonHandler.classList.remove("header__burgerButton--active");
      mobileNavHandler.classList.remove("mobileNav--visible");
    });
  });

  burgerButtonHandler.addEventListener("click", (event) => {
    event.stopPropagation();
    burgerButtonHandler.classList.toggle("header__burgerButton--active");
    mobileNavHandler.classList.toggle("mobileNav--visible");
  });
};
