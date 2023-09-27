'use strict';

const rectangle = {
  _width: 5,
  _height: 5,

  set width(width) {
    if (typeof width === 'number') {
      this._width = width;
    } else {
      console.log('Ширина должна быть числом');
    }
  },

  set height(height) {
    if (typeof height === 'number') {
      this._height = height;
    } else {
      console.log('Высота должна быть числом');
    }
  },

  get width() {
    return this._width;
  },

  get height() {
    return this._height;
  },

  getPerimeter() {
    return (this._width + this._height) * 2 + 'см';
  },

  getArea() {
    return this._width * this._height + 'см²';
  },
};

console.log(rectangle.getPerimeter());
console.log(rectangle.getArea());

rectangle.width = 8;
rectangle.height = 10;

console.log(rectangle.getPerimeter());
console.log(rectangle.getArea());
