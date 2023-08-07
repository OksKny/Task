'use strict';

const generateRandomArray = (count, n, m, parity) => {
  const array = [];
  const range = Math.abs(m - n) + 1;
  const min = Math.min(n, m);
  const max = Math.max(n, m);

  while (array.length < count) {
    const randomNum = Math.round(Math.random() * range) + min;
    if ((randomNum % 2 === 0 && parity === 'even') || (randomNum % 2 === 1 && parity === 'odd')) {
        array.push(randomNum);
    }
  }

  return array;
}

console.log(generateRandomArray(100, 50, -40, 'even'));