'use strict';

const hastagInput = document.querySelector(`.text__hashtags`);
const regular = /^#[a-zA-Z0-9А-ЯЁа-яё]*$/;
const space = ` `;
const MIN_LENGTH = 2;
const MAX_LENGTH = 20;
const MAX_ARRAY_LENGTH = 5;

const checkInput = (array) => {
  if (array.length > MAX_ARRAY_LENGTH) {
    hastagInput.setCustomValidity(`Максимальное количество хештегов: 5`);
    return;
  }

  for (let i = 0; i < array.length; i++) {
    let element = array[i];

    const valueLength = element.length;
    hastagInput.setCustomValidity(``);
    if (valueLength < MIN_LENGTH) {
      hastagInput.setCustomValidity(
          `Ещё  ${MIN_LENGTH - valueLength} симв.`
      );
      break;
    } else if (valueLength > MAX_LENGTH) {
      hastagInput.setCustomValidity(
          `Удалите лишние ${valueLength - MAX_LENGTH} симв.`
      );
      break;
    } else if (regular.test(element) === false) {
      hastagInput.setCustomValidity(
          `Хэш-тег должен состоять из букв и чисел и не может содержать пробелы или спецсимволы.`
      );
      break;
    } else if (array.length > 1) {
      const hasDuplicates = (arr) =>
        arr.some((item) => arr.indexOf(item) !== arr.lastIndexOf(item));

      if (hasDuplicates(array) === true) {
        hastagInput.setCustomValidity(
            `Один и тот же хэш-тег не может быть использован дважды.`
        );
        break;
      }
    } else {
      hastagInput.setCustomValidity(``);
    }
  }
  hastagInput.reportValidity();
};
const hastagInputHandler = function () {
  const inputArray = hastagInput.value.toLowerCase().split(space);
  checkInput(inputArray);
};
hastagInput.addEventListener(`input`, hastagInputHandler);

hastagInput.addEventListener(`focus`, function () {
  document.removeEventListener(`keydown`, window.onWindowEscPress);
});
hastagInput.addEventListener(`blur`, function () {
  document.addEventListener(`keydown`, window.onWindowEscPress);
});


