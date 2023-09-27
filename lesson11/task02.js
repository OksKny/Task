'use strict';

const generateArray = (arr) => {
  const number = Math.floor(Math.random() * 11);
  const newArr = [...arr, number];

  if (newArr.reduce((a, b) => a + b, 0) < 50) {
    return generateArray(newArr);
  } else {
    return newArr;
  }
};

const myArray = [];
const result = generateArray(myArray);
console.log(result);
