'use strict';

const bigPicture = document.querySelector(`.big-picture`);
const bigPictureClose = document.querySelector(`.big-picture__cancel`);
const commentTemplate = bigPicture.querySelector(`.social__comment`).cloneNode(true);
const commentsContainer = bigPicture.querySelector(`.social__comments`);


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

  commentsContainer.textContent = ``;
  commentsContainer.appendChild(commentsFragment);
}

const onPicturesEscPress = function (evt) {
  if (evt.key === `Escape`) {
    evt.preventDefault();
    closePictures();
  }
};

const openPictures = function () {
  document.body.classList.add(`modal-open`);
  bigPicture.classList.remove(`hidden`);

  document.addEventListener(`keydown`, onPicturesEscPress);
};

const closePictures = function () {
  document.body.classList.remove(`modal-open`);
  bigPicture.classList.add(`hidden`);

  document.addEventListener(`keydown`, onPicturesEscPress);
};


bigPicture.addEventListener(`click`, function () {
  openPictures();
});

bigPicture.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    openPictures();
  }
});

const initPictures = function () {
  bigPicture.querySelector(`.social__comment-count`).classList.add(`hidden`);
  bigPicture.querySelector(`.comments-loader`).classList.add(`hidden`);
};

bigPicture.addEventListener(`click`, function () {
  closePictures();
});

bigPictureClose.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    closePictures();
  }
});


window.picture = {
  render: showBigPicture,
  open: openPictures,
  close: closePictures,
  init: initPictures
};
