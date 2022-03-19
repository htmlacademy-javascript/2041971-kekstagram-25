import { picturesData } from './popup.js';
import {createComment} from './data.js';

const comment = createComment();
const createCommentTemplate = (commentData) => {
  const commentTemplate = `<li class="social__comment">
     <img
         class="social__picture"
         src="${commentData.avatar}"
         alt="${commentData.name}"
       width="35" height="35">
    <p class="social__text">"${commentData.message}"</p>
</li>`;
  window.console.log(commentData);
  return commentTemplate;
};
const template = createCommentTemplate(comment);
window.console.log(template);

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
  socialComments.innerHTML = template;

  const socialCommentCount = bigPicture.querySelector('.social__comment-count');
  const commentsLoader = bigPicture.querySelector('.comments-loader');
  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
};
showBigPicture(picturesData[0]);


// const bodyElements = document.querySelector('body');


// const buttonCancel = openBigPicture.querySelector('.big-picture__cancel');


// const isEscPress = (evt)=>(evt.keyCode===27);
// const isMouseClick =(evt)=>(evt.type==='click');

// const hideBigPicture = (evt)=>{
//   evt.preventDefault();
//   if (isEscPress(evt) || isMouseClick(evt)) {
//     openBigPicture.classList.add('hidden');
//     bodyElements.classList.remove('modal-open');

//     buttonCancel.addEventListener('click', hideBigPicture);
//   }
// };

// const showBigPicture = ()=>{
//   socialCommentCount.classList.add('hidden');
//   commentsLoader.classList.add('hidden');
//   bodyElements.classList.add('modal-open');

//   buttonCancel.addEventListener('click', hideBigPicture);
// };


// window.console.log(showBigPicture);

