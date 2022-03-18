import { picturesData } from './popup.js';
import {createComment} from './data.js';
const showBigPicture = (pictureElement) => {
  const bigPicture = document.querySelector('.big-picture');
  bigPicture.classList.remove('hidden');
  window.console.log(pictureElement);

  const bigImg = bigPicture.querySelector('.big-picture__img');
  const likesCount = bigPicture.querySelector('.likes-count');
  const commentsCount = bigPicture.querySelector('.comments-count');
  const socialCaption = bigPicture.querySelector('.social__caption');

  bigImg.src = pictureElement.url;
  likesCount.textContent = pictureElement.likes;
  commentsCount.textContent = pictureElement.comments.length;
  socialCaption.textContent = pictureElement.description;
};
showBigPicture(picturesData[0]);


//const socialComments = document.querySelector('.social__comments');
const comment = createComment;
const createCommentTemplate = (avatar, name, message) => {
  const commentTemplate = `<li class="social__comment">
     <img
         class="social__picture"
         src="${avatar}"
         alt="${name}"
       width="35" height="35">
    <p class="social__text">"${message}"</p>
</li>`;
  window.console.log(commentTemplate);
};
createCommentTemplate(comment[0]);

// const bodyElements = document.querySelector('body');


// //const socialComments = openBigPicture.querySelector('.social__comments');
// const socialCommentCount = openBigPicture.querySelector('.social__comment-count');
// const commentsLoader = openBigPicture.querySelector('.comments-loader');

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

