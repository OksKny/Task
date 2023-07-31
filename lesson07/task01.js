'use strict';

const generateArray = (count) => 
Array.from({length: count}).map(() => Math.round(Math.random() * 101));

const numbers = generateArray(10);
console.log(numbers); 



