'use strict';

{
  const similarListElement = document.querySelector(`.pictures`);
  const similarPictureTemplate = document.querySelector(`#picture`).content.querySelector(`.picture`);

  const getHtmlPicturesFragment = (pictures) => {
    const fragment = document.createDocumentFragment();

    pictures.forEach((picture) => {
      const elem = similarPictureTemplate.cloneNode(true);

      elem.querySelector(`.picture__img`).src = picture.url;
      elem.querySelector(`.picture__likes`).textContent = picture.likes;
      elem.querySelector(`.picture__comments`).textContent = picture.comments.length;

      fragment.appendChild(elem);
    });

    return fragment;
  };

  const indexOfPicture = (picture) => {
    const picturesNodeList = similarListElement.querySelectorAll(`.picture`);
    return Array.from(picturesNodeList).indexOf(picture);
  };

  similarListElement.addEventListener(`click`, (evt) => {
    const chosenPictureNode = evt.target.closest(`.picture`);
    if (chosenPictureNode) {
      const chosenPictureIndex = indexOfPicture(chosenPictureNode);

      window.picture.render(window.picturesArr[chosenPictureIndex]);
      window.picture.open();
    }
  });

  window.pictures = {
    init: () => {
      const picturesHtmlFragment = getHtmlPicturesFragment(window.picturesArr);
      similarListElement.appendChild(picturesHtmlFragment);
    }
  };
}
