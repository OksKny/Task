'use strict';

function reverseString (str) {
    let string = '';
    for (let i = str.length - 1; i >= 0; i--) {
        string += str[i];
    }
    return string;
}

reverseString('Привет мир');

