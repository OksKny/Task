'use strict';

const generateArray = (count, n, m, parity) => 
Array.from({length: count}).map(() => Math.round(Math.random() * (m - n) + n)).filter(e => e % 2 == (parity == 'odd'));


const numbers = generateArray(50, 50, 30, 'odd');
console.log(numbers);


