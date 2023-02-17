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


