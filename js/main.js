
// Задача 1 (Функция, возвращающая случайное целое число из переданного диапазона включительно)
// источник https://learn.javascript.ru/task/random-int-min-max

const getRandomInteger = (min, max) =>
  min + Math.floor(Math.random() * (max + 1 - min));




// Задача 2 (Функция для проверки максимальной длины строки)
const checkLineLength = (checkString, maxLength) => checkString.length <= maxLength;
