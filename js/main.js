// Задача 1 (Функция, возвращающая случайное целое число из переданного диапазона включительно)
// источник https://learn.javascript.ru/task/random-int-min-max

function getRandomInteger(min, max) {
  return min + Math.floor(Math.random() * (max + 1 - min));
}
getRandomInteger(39, 44);

// Задача 2 (Функция для проверки максимальной длины строки)
const checkLineLength = (checkString, maxLength) => checkString.length <= maxLength;
checkLineLength('длинна_строки', 16);


// количество постов
const POSTS_QUANTITY = 25;

// описание к фоткам
const DESCRIPTIONS = [
  'красотища',
  'свежая фотка',
  'не знаю как вам, но мне нравится',
  'никогда не устану фотать!',
  'кадр на вес золота',
  'ничто не должно уйти от объектива моей фотокамеры',
  'это вам не тапки грызть',
  'аж слезы наворачиваются',
  'не судите строго, у меня лапки',
  'откуда у меня столько таланта?',
  'просто ставь лайк',
];

// комментарии
const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Андрей',
  'Василий',
  'Федор',
  'Аркадий',
  'Снежана',
  'Олег',
  'Оксана',
  'Марина',
  'Алексей',
  'Алиса',
];

// получение случайного значения из массива
const getRandomArrayElement = (array) => array[getRandomInteger(0, array.length - 1)];

// случайный аватар
const getAvatar = () => `img/avatar-${getRandomInteger(1, 6)}.svg`;
getAvatar();


// создание массива из комментариев
const getMakeComments = (commentsAmount) => {
  const comments = [];

  for (let i = 1; i <= commentsAmount; i++) {
    comments.push({
      id: i,
      avatar: `img/avatar-${i}.jpg`,
      message: getRandomArrayElement(COMMENTS),
      name: getRandomArrayElement(NAMES),
    });
  }

  return comments;
};

// создание массива из постов
const getMakePosts = (postsAmount) => {
  const posts = [];

  for (let i = 1; i <= postsAmount; i++) {
    posts.push({
      id: i,
      url: `photos/${i}.jpg`,
      description: getRandomArrayElement(DESCRIPTIONS),
      likes: getRandomInteger(15, 200),
      comments: getMakeComments(getRandomInteger(2, 8)),
    });
  }

  return posts;
};

getMakePosts(POSTS_QUANTITY);
