'use strict';
const generateArray = (length, n, m, parity) => {
    const arr = []
    const numbers = [...Array(length)]; 
  
    for (let i = 0; i < numbers.length; i++) {
    numbers[i] = Math.round(Math.random() * (m - n) + n);
    arr.push(numbers[i]);

    arr.map(() => arr.filter(numbers => parity === 'even' ? numbers % 2 === 0 : numbers % 2 !== 0));
  }

  return arr;

}

generateArray();

console.log(generateArray(10, 1, 10, 'odd'));