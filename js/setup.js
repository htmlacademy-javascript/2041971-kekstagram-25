import { picturesData } from './popup.js';

const commentTemplate = (comment) => (
  `<li class="social__comment">
    <img
      class="social__picture"
      src="${comment.avatar}"
      alt="${comment.name}"
      width="35" height="35">
    <p class="social__text">"${comment.message}"</p>
  </li>`);

const showBigPicture = (pictureElement) => {
  const bigPicture = document.querySelector('.big-picture');
  bigPicture.classList.remove('hidden');

  window.console.log(pictureElement);

  const bigImg = bigPicture.querySelector('.big-picture__img');
  const likesCount = bigPicture.querySelector('.likes-count');
  const commentsCount = bigPicture.querySelector('.comments-count');
  const socialCaption = bigPicture.querySelector('.social__caption');
  const socialComments = bigPicture.querySelector('.social__comments');

  bigImg.src = pictureElement.url;
  likesCount.textContent = pictureElement.likes;
  commentsCount.textContent = pictureElement.comments.length;
  socialCaption.textContent = pictureElement.description;
  socialComments.innerHTML = commentTemplate(pictureElement.comments[0]);

  const socialCommentCount = bigPicture.querySelector('.social__comment-count');
  const commentsLoader = bigPicture.querySelector('.comments-loader');
  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
};
showBigPicture(picturesData[0]);
window.console.log(picturesData);


const bodyElement = document.querySelector('body');
bodyElement.classList.add('modal-open');

window.console.log(bodyElement);

const escKeyCode = 27;
const isEscPress = (evt)=>(evt.keyCode===escKeyCode);
const isMouseClick =(evt)=>(evt.type==='click');

const hideBigPicture = (evt)=>{
  evt.preventDefault();
  if (isEscPress(evt) || isMouseClick(evt)) {
    const bigPicture = document.querySelector('.big-picture');
    bigPicture.classList.add('hidden');
    bodyElement.classList.remove('modal-open');
  }
};

const addListeners = ()=>{
  const buttonCancel = document.querySelector('.big-picture__cancel');
  buttonCancel.addEventListener('click', hideBigPicture);
};

addListeners();
