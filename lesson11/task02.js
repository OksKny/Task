'use strict';

const generateArray = (arr) => {
  const number = Math.floor(Math.random() * 11);

  if (arr.reduce((a, b) => a + b, 0) + number >= 50) {
    return arr;
  } else {
    const newArr = [...arr, number];
    return generateArray(newArr);
  }
};

const myArray = [];
const result = generateArray(myArray);
console.log(result);
