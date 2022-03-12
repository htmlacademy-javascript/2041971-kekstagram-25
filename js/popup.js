import { getMockPhotos } from './data';

const similarListElement = document.querySelector('.picture');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const similarPictures = getMockPhotos();

const similarListFragment = document.createDocumentFragment();

similarPictures.forEach(({comments, likes, url}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__comments').textContent = comments;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__img').src = url;
  similarListFragment.appendChild(pictureElement);
});
similarListElement.appendChild(similarListFragment);

