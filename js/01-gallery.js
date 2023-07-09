import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryCont = document.querySelector(".gallery");
const markUp = createGallItemsMarkup(galleryItems);

function createGallItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
            <a class="gallery__link" href = "${original}" >
            <img class="gallery__image"
        src="${preview}"
        alt="${description}"
        data-source = "${original}" /> </a> </li>`;
    })
    .join("");
}

galleryCont.insertAdjacentHTML("beforeend", markUp);
galleryCont.addEventListener("click", onClick);

function onClick(e) {
  e.preventDefault();
  if (e.target.classList.contains("gallery")) return;
  const source = e.target.dataset.source;
  const instance = basicLightbox.create(
    `<img src="${source}" width="800" height="600">`
  );
  instance.show();
}

// document.addEventListener("keydown", (keyPressed) => {
//   if (keyPressed.key === "Escape") {
//     console.log("event listener added");
//     instance.close();
//   }
// });

// const onShow = document.addEventListener("keydown", (keyPressed) => {
//   if (keyPressed.key === "Escape") });
//     const onClose = document.removeEventListener("keydown", (keyPressed) => {
//       if (keyPressed.key === "Escape") });
// function onClick(e) {
//   e.preventDefault();
//   if (e.target.nodeName !== "BUTTON") {
//     return;
//   }
//   const source = e.target.dataset.source;

//   const instance = basicLightbox.create(
//     `<img src="${source}" width="800" height="600">`
//   );
//   instance.show(
