'use strict';

const start = (min = 1, max = 100) => {
  const number = Math.floor(Math.random() * (max - min)) + min;

  const getUserNumber = () => {
    const userNumber = prompt('Введите число');

    if (userNumber === null) {
      alert('Пока :)');
      return;
    }

    if (isNaN(userNumber) || +userNumber > max || +userNumber < min) {
      alert(`Введи число от ${min} до ${max}`);
      getUserNumber();
      return;
    }

    if (+userNumber > number) {
      alert('Меньше');
      getUserNumber();
      return;
    }

    if (+userNumber < number) {
      alert('Больше');
      getUserNumber();
      return;
    }

    alert('Правильно!');
  };

  getUserNumber();
};

start();
