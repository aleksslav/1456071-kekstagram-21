'use strict';

const STEP = 25;
const MIN_SCALE = STEP;
const MAX_SCALE = 100;
const scaleValue = document.querySelector(`.scale__control--value`);
const smallerButton = document.querySelector(`.scale__control--smaller`);
const biggerButton = document.querySelector(`.scale__control--bigger`);
const imgResizeEffect = document.querySelector(`img`);

const resizeImg = function (evt) {
  let scaleElements = evt.target;
  let currentValue = parseInt(scaleValue.value, 10);
  let newValue = scaleElements.classList.contains(`scale__control--smaller`) ? currentValue - STEP : currentValue + STEP;

  if (newValue > MAX_SCALE || newValue < MIN_SCALE) {
    return;
  }
  scaleValue.value = newValue + `%`;
  imgResizeEffect.style.transform = `scale(` + newValue / MAX_SCALE + `)`;
};

smallerButton.addEventListener(`click`, resizeImg);
biggerButton.addEventListener(`click`, resizeImg);
