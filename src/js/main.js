import { navHighlighter } from "./navHighlight";
import { toggleMobileMenu } from "./toggleMobileMenu";
import { fetchData } from "./fetchData";
import { clearContainer } from "./renderItems";

const selectHandler = document.querySelector("#itemsPerPage");
let page = 1;

window.addEventListener("scroll", navHighlighter);

window.addEventListener("scroll", () => {
  if (window.scrollY + window.innerHeight >= document.body.offsetHeight - 300) {
    fetchData(page, selectHandler.value);
    page++;
    console.log(page);
  }
});

selectHandler.addEventListener("change", () => {
  clearContainer();
  page = 1;
});

toggleMobileMenu();
