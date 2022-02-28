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

const descriptions = [
  'Прекрасный день',
  'Отдыхаю',
  'Посмотрите на это',
  'Люблю гулять',
  'Не хочу на работу',
];
descriptions.slice(0,5); // Чтобы не выдавало ошибку

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

const createMessage = () => {
  const randomId = getRandomeInInclusie(1,1000);
  const randomAvatar = getRandomeInInclusie(1,6);
  const randomMessageIndex = getRandomeInInclusie(0,MESSAGES.length-1);
  const randomNameIndex = getRandomeInInclusie(0,NAMES.length-1);
  return {
    id: randomId,
    avatar: randomAvatar, //Тут мне не понятно как сделать 'img/avatar-' + randomAvatar + '.svg', очевидно, не то
    messege: MESSAGES [randomMessageIndex] ,
    name: NAMES [randomNameIndex],
  };
};

createMessage.slice(0,5); // Чтобы не выдавало ошибку
