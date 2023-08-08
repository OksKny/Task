'use strict';

const generateRandomArray = (count, n, m, parity) => {
  const array = [];
  const range = Math.abs(m - n) + 1;
  const min = Math.min(n, m);
  const max = Math.max(n, m);
  

  while (array.length < count) {
    const randomNum = Math.round(Math.random() * range) + min;
    if (parity && !['even', 'odd'].includes(parity))
      return [];
    if (parity) {
      const v = randomNum % 2
      if (parity === 'even' && v) continue
      if (parity === 'odd' && !v) continue
    }
    array.push(randomNum);
  }
  return array;
}

console.log(generateRandomArray(10, 50, -40, 'odd'));