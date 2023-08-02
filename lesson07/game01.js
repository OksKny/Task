'use strict';

const start = (min = 1, max = 100) => {
  let userNumber = '';
  const number = Math.floor(Math.random() * (max - min)) + min;

  while (userNumber !== null && +userNumber !== number) {
    userNumber = prompt('Введите число');

    switch (true) {
      case userNumber === null:
        alert('Пока :)');
        break;
      case isNaN(userNumber):
      case +userNumber > max:
      case +userNumber < min:
        alert(`Введи число от ${min} до ${max}`);
        break;
      case (+(userNumber) > number): 
        alert('Меньше');
        break;
      case (+(userNumber) < number): 
        alert('Больше');
        break;
      default:
        alert('Правильно!');
    }
  }
}

start();



