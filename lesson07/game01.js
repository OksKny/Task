'use strict';

const min = Math.ceil(1);
const max = Math.floor(100);

const number = Math.floor(Math.random() * (max - min)) + min;
console.log(number);

const start = () => {
  while (true) {
    let userNumber = prompt('Введите число');
    if (isNaN(userNumber)) {
      alert('Введи число!');
    } else if (userNumber === null) {
      alert('Пока :)');
    break;
    }

    switch (true) {
      case (+(userNumber) === number): 
      alert('Правильно!');
      break;
      case (+(userNumber) > number): 
      alert('Меньше');
      break;
      case (+(userNumber) < number): 
      alert('Больше');
      break;
    }
  }
}

start();



