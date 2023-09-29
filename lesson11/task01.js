'use strict';

const start = (min = 1, max = 100) => {
  const number = Math.floor(Math.random() * (max - min)) + min;

  const getUserNumber = () => {
    const userNumber = prompt('Введите число');


    switch (true) {
      case userNumber === null:
        alert('Пока :)');
        return null;
      case isNaN(userNumber):
      case +userNumber > max:
      case +userNumber < min:
        alert(`Введи число от ${min} до ${max}`);
        break;
      case +userNumber > number:
        alert('Меньше');
        break;
      case +userNumber < number:
        alert('Больше');
        break;
      default:
        alert('Правильно!');
        return number;
    }
    getUserNumber();
  };
  getUserNumber();
};

start();
