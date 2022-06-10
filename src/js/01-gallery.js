import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const palletteContainer = document.querySelector('.gallery');

palletteContainer.insertAdjacentHTML('beforeend', createCardsGallery(galleryItems))

function createCardsGallery(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `<div><a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
            </a></div>`;
        })
        .join('');
};

const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionSelector: 'img',
    captionClass: '.gallery__image',
    captionDelay: 250,
    captionPosition: 'bottom',
    captionsData: 'alt',
});

console.log(galleryItems);
