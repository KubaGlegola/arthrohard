import { renderItem } from "./renderItems";

export const fetchData = (pageNumber, pageSize) => {
  const response = fetch(
    "https://brandstestowy.smallhost.pl/api/random?pageNumber=" +
      pageNumber +
      "&pageSize=" +
      pageSize
  )
    .then((response) => response.json())
    .then((data) =>
      data.data.forEach((element) =>
        renderItem(element.id, element.name, element.value)
      )
    );
};
