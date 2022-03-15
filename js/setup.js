
const showBigPicture = () => {
  const openBigPicture = document.querySelector('.big-picture');
  openBigPicture.classList.remove('hidden');
};
window.console.log(showBigPicture);

// const bodyElements = document.querySelector('body');

// const bigImg = openBigPicture('.big-picture__img');
// const likesCount =openBigPicture('.likes-count');
// const commentsCount = openBigPicture('.comments-count');
// //const socialComments = openBigPicture.querySelector('.social__comments');
// const socialCommentCount = openBigPicture.querySelector('.social__comment-count');
// const commentsLoader = openBigPicture.querySelector('.comments-loader');

// const buttonCancel = openBigPicture.querySelector('.big-picture__cancel');

// // const createCommentTemplate = ({avatar, name, message})=>(
// //    <li class="social__comment">
// //     <img
// //         class="social__picture"
// //         src="${avatar}"
// //         alt="${name}"
// //         width="35" height="35">
// //     <p class="social__text">"${message}"</p>
// // </li>
// // )

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

// const showBigPicture = ({url,likes,comments})=>{
//   bigImg.srs = url;
//   likesCount.textContent = likes;
//   commentsCount.textContent = comments.length;
//   openBigPicture.classList.remove('hidden');
//   socialCommentCount.classList.add('hidden');
//   commentsLoader.classList.add('hidden');
//   bodyElements.classList.add('modal-open');

//   buttonCancel.addEventListener('click', hideBigPicture);
// };


// window.console.log(showBigPicture);

