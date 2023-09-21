'use strict';

const generateArray = (arr) => {
const number = Math.floor(Math.random() * 11);
arr.push(number);

if (arr.reduce((a, b) => a + b, 0) < 50) {
    return generateArray(arr);
} else {
    return arr;
}
}

const myArray = [];
const result = generateArray(myArray);
console.log(result);