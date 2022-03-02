/*Функция, возвращающая случайное целое число из переданного диапазона включительно.
Источник:https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random#получение_случайного_целого_числа_в_заданном_интервале_включительно*/
function getRandomeInInclusie(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (max > min && min >= 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return false;
}
getRandomeInInclusie(50, 3);

//Функция для проверки максимальной длины строки.
function checkMaxStrLength(str, maxLenght) {
  return str.length <= maxLenght;
}
checkMaxStrLength('larissa', 10);

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

const createComments = () => {
  const randomId = getRandomeInInclusie(1,1000);
  const randomAvatar = getRandomeInInclusie(1,6);
  const randomMessageIndex = getRandomeInInclusie(0,MESSAGES.length-1);
  const randomNameIndex = getRandomeInInclusie(0,NAMES.length-1);
  return {
    id: randomId,
    avatar: `img/avatar-${randomAvatar}.svg`,
    messege: MESSAGES[randomMessageIndex] ,
    name: NAMES[randomNameIndex],
  };
};

const createDescriptionPhoto = () => {
  const randomId = getRandomeInInclusie(1,25);
  const randomUrl=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
  window.console.log(randomUrl[0]); //чтобы не выдавал ошибку
  const randomDescription = getRandomeInInclusie(0,DESCRIPTIONS.length-1);
  const randomLikes = getRandomeInInclusie(15,200);
  return{
    id: randomId,
    //url: randomUrl.forEach((i) => {`photos/${i}.jpg`}), нужна помощь
    description: randomDescription,
    likes: randomLikes,
    comments: createComments,
  };

};
window.console.log(createDescriptionPhoto);
