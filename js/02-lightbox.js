import { galleryItems } from "./gallery-items.js";
// Change code below this line

const listElements = document.querySelector(".gallery");

const markUp = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__a">
            <a class="gallery__link" href = "${original}" >
            < img class="gallery__image"
        src = "${preview}"
        alt = "${description}" width="800" height="600"/>
        </a> </li>`;
  })
  .join(``);

let lightbox = new SimpleLightbox(".gallery__item", {
  captionsData: "alt",
  captionDelay: 250,
});

listElements.insertAdjacentHTML(`afterbegin`, markUp);
listElements.addEventListener("click", onClick);

function onClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "BUTTON") {
    return;
  }

  const source = e.target.dataset.source;
  const instance = basicLightbox.create(
    `<img src="${source}" width="800" height="600">`
  );
  instance.show();
}
