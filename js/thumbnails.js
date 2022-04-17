
const thumbnails = document.querySelectorAll('.picture');

const bigPicture = document.querySelector('.big-picture__img img');
const bigPictureSection = document.querySelector('.big-picture');
const addThumbnailClickHandler = function (evt) {
  bigPicture.src = evt.target.src;

  bigPictureSection.classList.remove('hidden');
  window.console.log(evt.target.src);
};


for (let i=0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener('click', addThumbnailClickHandler);
}
