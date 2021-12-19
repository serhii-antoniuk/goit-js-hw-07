// import { galleryItems } from './gallery-items.js';

// const container = document.querySelector('.gallery');

// const markupGallery = createGalleryMarkup(galleryItems);

// container.insertAdjacentHTML('beforeend', markupGallery);

// container.addEventListener('click', onContainerClick);

// function createGalleryMarkup(gallery) {
//   return gallery
//     .map(({ preview, original, description }) => {
//       return `
//         <div class="gallery__item">
//             <a class="gallery__link" href="large-image.jpg" onclick="event.preventDefault()">
//                 <img
//                 class="gallery__image"
//                 src="${preview}"
//                 data-source="${original}"
//                 alt="${description}"
//                 />
//             </a>
//         </div>`;
//     })
//     .join('');
// }

// function onContainerClick(event) {
//   if (!event.target.classList.contains('gallery__image')) {
//     return;
//   }
//   const instance = basicLightbox.create(`
//     <img src="${event.target.dataset.source}">
//     `);
//   instance.show();

//   function onKeyboardEscAction(event) {
//     const ESC_KEY_CODE = 'Escape';
//     const isEscKey = event.code === ESC_KEY_CODE;
//     if (isEscKey) {
//       instance.close();
//     }
//   }

//   window.addEventListener('keydown', onKeyboardEscAction);
// }

import { galleryItems } from './gallery-items.js';
// Change code below this line
const instance = basicLightbox.create(`
  <img src="" />
`);

const refs = {
  gallery: document.querySelector('.gallery'),
  modal: instance.element().querySelector('img'),
};

const galleryMarkup = createGalleryMarkup();
refs.gallery.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `;
    })
    .join('');
}
refs.gallery.addEventListener('click', onOpenModal);

function onOpenModal(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  refs.modal.src = event.target.dataset.source;
  instance.show();
  window.addEventListener('keydown', onEscKeyPress);
}
function onEscKeyPress(event) {
  event.preventDefault();
  const isEscKey = event.keyCode === 27;
  console.log(event);
  if (isEscKey) {
    instance.close();
    window.removeEventListener('keydown', onEscKeyPress);
    refs.modal.src = '';
  }
}
