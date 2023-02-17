import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

const imgContainer = galleryItems.reduce((acum, item) => {
    return (acum += ` <div class = "gallery__item"> 
    <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
    </a>
</div>`);
}, '');
gallery.insertAdjacentHTML('beforeend', imgContainer);

gallery.addEventListener("click", (e) => {
    e.preventDefault();

    if (e.target.nodeName !== 'IMG') {
        return;
    }

    const imgSelected = e.target.getAttribute("data-source");

    const instance = basicLightbox.create(
    `<img src='${imgSelected}' width='800' height='600'>`,
    {
      // налаштування бібліотеки
      onShow: () => {
        document.addEventListener('keydown', closeModal);
      },
      onClose: () => {
        document.removeEventListener('keydown', closeModal);
      },
    }
  );
    instance.show();

})

function closeModal(e) {
    if (e.key === "Escape") {
        instance.close();
    }
}