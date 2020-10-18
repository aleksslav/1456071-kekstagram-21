'use strict';

const similarListElement = document.querySelector(`.pictures`);
const similarPictureTemplate = document.querySelector(`#picture`).content.querySelector(`.picture`);


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

function indexOfPicture(picture) {
  const picturesNodeList = similarListElement.querySelectorAll(`.picture`);
  return Array.from(picturesNodeList).indexOf(picture);
}


window.initPictures = () => {
  const picturesHtmlFragment = generatePicturesFragment(window.picturesArr);
  similarListElement.appendChild(picturesHtmlFragment);
};

similarListElement.addEventListener(`click`, (evt) => {
  const chosenPictureNode = evt.target.closest(`.picture`);
  if (chosenPictureNode) {
    const chosenPictureIndex = indexOfPicture(chosenPictureNode);

    window.picture.render(window.picturesArr[chosenPictureIndex]);
    window.picture.open();
  }
});
