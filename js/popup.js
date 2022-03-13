import { getMockPhotos } from './data.js';

const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const picturesData = getMockPhotos();

const pictureFragment = document.createDocumentFragment();

picturesData.forEach(({comments, likes, url}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__img').src = url;
  pictureFragment.appendChild(pictureElement);
});

picturesContainer.appendChild(pictureFragment);

window.console.log(picturesContainer);
