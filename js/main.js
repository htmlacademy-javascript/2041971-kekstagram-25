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

const description = [
  'Прекрасный день',
  'Отдыхаю',
  'Посмотрите на это',
  'Люблю гулять',
  'Не хочу на работу',
];
description.slice(0,5); // Чтобы не выдавало ошибку
