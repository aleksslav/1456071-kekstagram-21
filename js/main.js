"use strict";

/* задаем постоянные значения*/

const RANDOM_USERS = 25;

/* массив комментариев*/

const COMMENTS = [`Всё отлично!`,
  `В целом всё неплохо. Но не всё.`,
  `Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.`,
  `Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.`,
  `Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.`,
  `Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!`
];

/* массив описания фоторгафий*/

const DESCRIPTION = [`Интересная фотография`,
  `Я хочу рассказать об одном интересном месте.`,
  `Девушка в купальнике.`,
  `Ваш комментарий...`,
  `Наша поездка`
];


/* массив имен */

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

const similarPictureTemplate = document.querySelector(`#picture`).content.querySelector(`.picture`);
const similarListElement = document.querySelector(`.pictures`);
const body = document.querySelector(`body`);
const bigPicture = document.querySelector(`.big-picture`);
const commentTemplate = bigPicture.querySelector(`.social__comment`).cloneNode(true);
const commentsContainer = bigPicture.querySelector(`.social__comments`);
let picturesArr = [];

/* рандомное  число и элемент */

window.getRandomInt = function (min = 0, max = Number.MAX_SAFE_INTEGER) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

window.getRandomElem = function (array) {
  return array[window.getRandomInt(0, array.length - 1)];
};

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

function generatePicturesComponents(number = RANDOM_USERS) {
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

function generatePicturesFragment(pictures) {
  const fragment = document.createDocumentFragment();

  pictures.forEach((picture) => {
    const elem = similarPictureTemplate.cloneNode(true);

    elem.querySelector(`.picture__img`).src = picture.url;
    elem.querySelector(`.picture__likes`).textContent = picture.likes;
    elem.querySelector(`.picture__comments`).textContent = picture.comments.length;

    fragment.appendChild(elem);
  });

  return fragment;
}

function generateCommentsFragment(comments) {
  const fragment = document.createDocumentFragment();

  comments.forEach((comment) => {
    const elem = commentTemplate.cloneNode(true);

    elem.querySelector(`.social__picture`).src = comment.avatar;
    elem.querySelector(`.social__picture`).alt = comment.name;
    elem.querySelector(`.social__text`).textContent = comment.message;

    fragment.appendChild(elem);
  });

  return fragment;
}

function showBigPicture(picture) {
  const commentsFragment = generateCommentsFragment(picture.comments);

  bigPicture.querySelector(`.big-picture__img`).querySelector(`img`).src = picture.url;
  bigPicture.querySelector(`.likes-count`).textContent = picture.likes;
  bigPicture.querySelector(`.comments-count`).textContent = picture.comments.length;
  bigPicture.querySelector(`.social__caption`).textContent = picture.description;

  bigPicture.querySelector(`.social__comment-count`).classList.add(`hidden`);
  bigPicture.querySelector(`.comments-loader`).classList.add(`hidden`);
  body.classList.add(`modal-open`);

  commentsContainer.textContent = ``;
  commentsContainer.appendChild(commentsFragment);

  bigPicture.classList.remove(`hidden`);
}

function initPictures() {
  picturesArr = generatePicturesComponents();
  const picturesFragment = generatePicturesFragment(picturesArr);
  similarListElement.appendChild(picturesFragment);
}

initPictures();
showBigPicture(picturesArr[0]);
