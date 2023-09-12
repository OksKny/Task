'use strict';

const generateRandomArray = (count, n, m, parity) => {
  const array = [];
  const rule = ['even', 'odd'].indexOf(parity);
  const range = Math.abs(m - n);
  const min = Math.min(n, m);
  const max = Math.max(n, m) - (rule !== -1);
  

  for (let i = 0; i < count; i++) {
    let randomNum = Math.round(Math.random() * range) + min;
   
    if (rule !== -1 && randomNum % 2 !== rule) {
      randomNum++; 
    }
    array.push(randomNum);
  }
  return array;
}

console.log(generateRandomArray(10, 50, -40, 'odd'));