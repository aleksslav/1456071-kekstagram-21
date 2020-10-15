'use strict';

window.getRandomElem = (array) => array[window.getRandomInt(0, array.length - 1)];

window.getRandomInt = (min = 0, max = Number.MAX_SAFE_INTEGER) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

(() => {
  const KEYDOWN = {
    enter: `Enter`,
    esc: `Escape`,
  };
  const onPressEsc = (evt, callback) => {
    if (evt.key === KEYDOWN.esc) {
      evt.preventDefault();
      callback();
    }
  };

  const onPressEnter = (evt, callback) => {
    if (evt.key === KEYDOWN.enter) {
      callback(evt);
    }
  };
  window.util = {
    onPressEnter,
    onPressEsc,
    KEYDOWN,
  };
})();
