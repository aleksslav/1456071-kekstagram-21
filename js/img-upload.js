'use strict';

const uploadOverlay = document.querySelector(`.img-upload__overlay`);
const imgUpload = document.querySelector(`.img-upload`);
const uploadCancel = imgUpload.querySelector(`.img-upload__cancel`);
const uploadStart = imgUpload.querySelector(`.img-upload__control`);

const onPopupEscPress = function (evt) {
  if (evt.key === `Escape`) {
    evt.preventDefault();
    closePopup();
  }
};

const openPopup = function () {
  document.body.classList.add(`modal-open`);
  uploadOverlay.classList.remove(`hidden`);

  document.addEventListener(`keydown`, onPopupEscPress);
};

const closePopup = function () {
  document.body.classList.remove(`modal-open`);
  uploadOverlay.classList.add(`hidden`);

  document.addEventListener(`keydown`, onPopupEscPress);
};

uploadStart.addEventListener(`click`, function () {
  openPopup();
});

imgUpload.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    openPopup();
  }
});

uploadCancel.addEventListener(`click`, function () {
  closePopup();
});

uploadCancel.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    closePopup();
  }
});
