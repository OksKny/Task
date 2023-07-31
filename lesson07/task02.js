'use strict';

const generateArray = (count, n, m) => 
Array.from({length: count}).map(() => Math.round(Math.random() * (m - n) + n));

const numbers = generateArray(50, 50, 20);
console.log(numbers);
