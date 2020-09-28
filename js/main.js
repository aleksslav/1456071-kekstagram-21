"use strict";

/* задаем постоянные значения*/

const RANDOM_USERS = 25;
const LIKE_MIN = 15;
const LIKE_MAX = 200;
const RANDOM_PICTURES = 25;
const RANDOM_COMMENTS = 5;
const MIN_AVATAR = 1;
const MAX_AVATAR = 6;

/* массив комментариев*/

let COMMENTS = [`Всё отлично!`,
  `В целом всё неплохо. Но не всё.`,
  `Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.`,
  `Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.`,
  `Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.`,
  `Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!`
];

/* массив описания фоторгафий*/

let DESCRIPTION = [`Интересная фотография`,
  `Я хочу рассказать об одном интересном месте.`,
  `Девушка в купальнике.`,
  `Ваш комментарий...`,
  `Наша поездка`
];

/* массив имен */

let NAME_AUTHOR = [`Глеб`,
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

let similarListElement = document.querySelector(`.pictures`);
let similarPictureTemplate = document.querySelector(`#picture`).content.querySelector(`.picture`);

/* рандомное чило */

let getRandomElement = function (arr) {
  return Math.floor(Math.random() * arr.length);
};

/* массив аватарок */

let numberAvatar = [];
for (let a = MIN_AVATAR; a <= MAX_AVATAR; a++) {
  numberAvatar.push(a);
}

/* массив фотографий */

let numberPhoto = [];
for (let b = 1; b <= RANDOM_USERS; b++) {
  numberPhoto.push(b);
}

/* массив лайков */

let likes = [];
for (let c = LIKE_MIN; c <= LIKE_MAX; c++) {
  likes.push(c);
}

/* массив со случайными комментариями */

let comments = [];
for (let d = 0; d < RANDOM_COMMENTS; d++) {
  let randomComment = {
    avatar: `img/avatar-` + numberAvatar[getRandomElement(numberAvatar)] + `.svg`,
    name: NAME_AUTHOR[getRandomElement(NAME_AUTHOR)],
    message: COMMENTS[getRandomElement(COMMENTS)]
  };
  comments.push(randomComment);
}

/* массив со случайными картнками */

let pictures = [];
for (let e = 0; e < RANDOM_PICTURES; e++) {
  let randomPicture = {
    url: `photos/` + numberPhoto[e] + `.jpg`,
    like: likes[getRandomElement(likes)],
    description: DESCRIPTION[getRandomElement(DESCRIPTION)],
    comment: comments
  };
  pictures.push(randomPicture);
}

/* добавляет в template, случайные картинки, кол-вом лайков, и комментариев  */

let renderPicture = function (picture) {
  let pictureElement = similarPictureTemplate.cloneNode(true);

  pictureElement.querySelector(`.picture__img`).src = picture.url;
  pictureElement.querySelector(`.picture__likes`).textContent = picture.like;
  pictureElement.querySelector(`.picture__comments`).textContent = picture.message;

  return pictureElement;
};

let fragment = document.createDocumentFragment();
for (let f = 0; f < RANDOM_PICTURES; f++) {
  fragment.appendChild(renderPicture(pictures[f]));
}
similarListElement.appendChild(fragment);
