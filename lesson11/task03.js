'use strict';

const rectangle = {
  width: 5,
  height: 5,

  setWidth(width) {
    if (typeof width === 'number') {
      this.width = width;
    } else {
      console.log('Ширина должна быть числом');
    }
  },

  setHeight(height) {
    if (typeof height === 'number') {
      this.height = height;
    } else {
      console.log('Высота должна быть числом');
    }
  },

  getPerimeter() {
    return (this.width + this.height) * 2 + 'см';
  },

  getArea() {
    return this.width * this.height + 'см²';
  },
};

console.log(rectangle.getPerimeter());
console.log(rectangle.getArea());

rectangle.setWidth(8);
rectangle.setHeight(10);

console.log(rectangle.getPerimeter());
console.log(rectangle.getArea());
