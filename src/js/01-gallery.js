// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = onCreateGalleryItems(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function onCreateGalleryItems(images) {
  console.log()
    return images
      .map(({ preview, original, description }) => {
        return `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" /></a>`;     
      }).join('');  
};

const lightbox = new SimpleLightbox('.gallery a');

galleryContainer.addEventListener('click', onClickHandler);

function onClickHandler(e) {
  e.preventDefault();
  lightbox.options.captionsData = "alt";  
  lightbox.options.captionDelay = 250;  
};
