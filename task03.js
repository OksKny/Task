'use strict';

let price = 0;
calculate(31000, 8, 'METHED');

function calculate(amount, products, promo = null) { 
    let basketAmount = amount;

    if (products >= 10) {
        let discontThree = basketAmount * 3 / 100;
        basketAmount -= discontThree;
    } 

    if (basketAmount >= 30000) {
       let discountFifteenDifferences = (basketAmount - 30000) * 15 / 100;
      basketAmount -= discountFifteenDifferences;
    } 

    if (promo === 'METHED') {
      let discontTen = basketAmount * 10 / 100;
      basketAmount -= discontTen;
    }

    if (basketAmount >= 2000 && promo === 'G3H2Z1') {
      basketAmount -= 500;
    } else if (promo === 'G3H2Z1' && basketAmount < 500) {
      basketAmount = 0;
    }

  return price = basketAmount;
}

console.log('Cтоимость корзины: ', price);




