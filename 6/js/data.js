import {getRandomeInInclusie} from './util.js';

const DESCRIPTIONS = [
  'Прекрасный день',
  'Отдыхаю',
  'Посмотрите на это',
  'Люблю гулять',
  'Не хочу на работу',
];

const NAMES = [
  'Даша',
  'Света',
  'Оля',
  'Денис',
  'Владимир',
];

const MESSAGES = [
  'Все отлично',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const getRamdomArrayElement = (elements) => elements [getRandomeInInclusie(0, elements.length - 1)];

const createComment = () => {
  const randomId = getRandomeInInclusie(1,1000);
  const randomAvatar = getRandomeInInclusie(1,6);
  return {
    id: randomId,
    avatar: `img/avatar-${randomAvatar}.svg`,
    message: getRamdomArrayElement(MESSAGES),
    name: getRamdomArrayElement(NAMES),
  };
};

const createDescriptionPhoto = (index) => {
  const randomLikes = getRandomeInInclusie(15,200);
  return{
    id: index,
    url: `photos/${index}.jpg`,
    description: getRamdomArrayElement(DESCRIPTIONS),
    likes: randomLikes,
    comments:[createComment(),createComment()],
  };
};

const getMockPhotos = () => {
  const photos = [];
  for (let i=1; i<=25; i++) {
    photos.push(createDescriptionPhoto(i));
  }
  return photos;
};

export {getMockPhotos};
//export {createComment};
