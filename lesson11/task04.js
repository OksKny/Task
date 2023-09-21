'use strict';


const cart = {
  items: [],
  count: 0,
  discount: 0,

  get totalPrice() {
    return this.calculateItemPrice();
  },

  add(prodName, prodPrice, prodAmount) {
    const goods = {
      prodName,
      prodPrice,
      prodAmount,
    };

    this.items.push(goods);
    this.increaseCount(prodAmount);
  },

  increaseCount(num) {
    this.count += num;
  },

  setDiscount(promocode) {
    if (promocode === 'METHED') {
      this.discount = 15;
    } else if (promocode === 'NEWYEAR') {
      this.discount = 21;
    } else {
      console.log('Недействительный промокод');
    }
  },

  calculateItemPrice() {
  const discountedPrice = this.items.reduce((totalPrice, {prodAmount, prodPrice}) =>
      (totalPrice += prodAmount * prodPrice), 0);

    return discountedPrice * (1 - this.discount / 100);
  },

  clear() {
    this.items = [];
    this.count = 0;
  },

  print() {
    console.log(JSON.stringify(this.items));
    console.log(this.totalPrice);
    console.log(this.count);
  },
};

cart.add('orange', 50, 5);
cart.add('apple', 30, 10);
cart.add('banana', 70, 3);
cart.add('kiwi', 100, 7);

cart.setDiscount('METHED');
cart.print();

