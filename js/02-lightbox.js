import { galleryItems } from "./gallery-items.js";
// Change code below this line

const listElements = document.querySelector(".gallery");
const markUp = createGallItemsMarkup(galleryItems);

function createGallItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img class="gallery__image"
        src="${preview}"
        alt="${description}" width="800" height="600"/>
        </a> </li>`;
    })
    .join(``);
}

listElements.insertAdjacentHTML(`afterbegin`, markUp);

let lightbox = new SimpleLightbox(".gallery__link", {
  captionsData: "alt",
  captionDelay: 250,
});
