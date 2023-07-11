'use strict';

const isPrime = (n) => {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            console.log('Не простое число');
            return false;
        }
    }
    console.log('Простое число');
}

isPrime();