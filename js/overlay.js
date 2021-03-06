'use strict';

const FILE_TYPES = [`gif`, `jpg`, `jpeg`, `png`];
const body = document.body;
const upload = document.querySelector(`#upload-file`);
const uploadOverlay = document.querySelector(`.img-upload__overlay`);
const uploadCancel = uploadOverlay.querySelector(`#upload-cancel`);
const commentsText = document.querySelector(`.text__description`);
const preview = document.querySelector(`.img-upload__image`);

const onOverlayEscPress = (evt) => {
  if (evt.key === window.utils.KEYDOWN.esc) {
    if (evt.target === window.form.hashtagsText || evt.target === commentsText) {
      evt.preventDefault();
    } else {
      evt.preventDefault();
      closeOverlay();
    }
  }
};

const openOverlay = () => {
  uploadOverlay.classList.remove(`hidden`);
  body.classList.add(`modal-open`);
  window.effects.filterScale.classList.add(`hidden`);
  window.effects.scaleSmaller.addEventListener(`click`, window.effects.declineScale);
  window.effects.scaleBigger.addEventListener(`click`, window.effects.increaseScale);
  document.addEventListener(`keydown`, onOverlayEscPress);
};

const closeOverlay = () => {
  uploadOverlay.classList.add(`hidden`);
  body.classList.remove(`modal-open`);
  document.removeEventListener(`keydown`, onOverlayEscPress);
  window.effects.scaleSmaller.removeEventListener(`click`, window.effects.declineScale);
  window.effects.scaleBigger.removeEventListener(`click`, window.effects.increaseScale);
  upload.value = ``;
  window.effects.imgPreview.style.transform = `scale(1)`;
  window.effects.imgPreview.style.filter = ``;
  window.effects.imgPreview.className = ``;
  window.form.hashtagsText.innerHTML = ``;
  window.form.form.reset();
};

const uploadImage = () => {
  const file = upload.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((ending) => {
    return fileName.endsWith(ending);
  });

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener(`load`, () => {
      preview.src = reader.result;
    });
    reader.readAsDataURL(file);
  }
};

upload.addEventListener(`change`, () => {
  uploadImage();
  openOverlay();
});

uploadCancel.addEventListener(`click`, () => {
  closeOverlay();
});

uploadCancel.addEventListener(`keydown`, (evt) => {
  window.utils.onPressEnter(evt, closeOverlay);
});

window.overlay = {
  closeOverlay,
  body,
};
