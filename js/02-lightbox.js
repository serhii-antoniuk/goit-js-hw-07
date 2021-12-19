// import { galleryItems } from './gallery-items.js';
// // Change code below this line

// console.log(galleryItems);

// const container = document.querySelector('.gallery');

// const markupGallery = createGalleryMarkup(galleryItems);

// container.insertAdjacentHTML('beforeend', markupGallery);

// container.addEventListener('click', onContainerClick);

// function createGalleryMarkup(gallery) {
//   return gallery
//     .map(({ preview, original, description }) => {
//       return `
//         <div class="gallery__item">
//             <a class="gallery__link" href="${original}" onclick="event.preventDefault()">
//                 <img class="gallery__image" src="${preview}" alt="${description}" />
//             </a>
//         </div>`;
//     })
//     .join('');
// }

// new SimpleLightbox('.gallery__item a', {
//   captionsData: 'alt',
//   captionDelay: '250',
// });

// function onContainerClick(event) {
//   if (!event.target.classList.contains('gallery__item')) {
//     return;
//   }
// }

import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
  gallery: document.querySelector('.gallery'),
};

const galleryMarkup = createGalleryMarkup();
refs.gallery.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item"
    href="${original}">
  <img class="gallery__image"
  src="${preview}"
  alt="${description}" />
</a>
    `;
    })
    .join('');
}
refs.gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
console.log(galleryItems);
