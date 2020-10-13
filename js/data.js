"use strict";

const RANDOM_USERS = 25;

const COMMENTS = [`Всё отлично!`,
  `В целом всё неплохо. Но не всё.`,
  `Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.`,
  `Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.`,
  `Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.`,
  `Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!`
];

const DESCRIPTION = [`Интересная фотография`,
  `Я хочу рассказать об одном интересном месте.`,
  `Девушка в купальнике.`,
  `Ваш комментарий...`,
  `Наша поездка`
];

const NAME_AUTHOR = [`Глеб`,
  `Александр`,
  `Виктория`,
  `Анна`,
  `Михаил`,
  `Андрей`,
  `Лера`,
  `Екатерина`,
  `Всеволод`,
  `Яна`
];

window.picturesComponents = COMMENTS + DESCRIPTION + NAME_AUTHOR;

function generateComments() {
  const commentsArr = [];

  for (let i = 0; i < window.getRandomInt(1, 2); i++) {
    commentsArr.push({
      avatar: `img/avatar-${window.getRandomInt(1, 6)}.svg`,
      message: window.getRandomElem(COMMENTS),
      name: window.getRandomElem(NAME_AUTHOR)
    });
  }

  return commentsArr;
}

function generatePicturesComponents(number) {
  const pictures = [];

  for (let i = 0; i < number; i++) {
    pictures.push({
      url: `photos/${i + 1}.jpg`,
      description: window.getRandomElem(DESCRIPTION),
      likes: window.getRandomInt(15, 200),
      comments: generateComments()
    });
  }

  return pictures;
}

window.picturesComponents = (number = RANDOM_USERS) => {
  window.picturesArr = generatePicturesComponents(number);
};
