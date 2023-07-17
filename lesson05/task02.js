'use strict';

const isPrime = (n) => {
    for (let i = 2; i < n; i++) {
        if (!(n % i)) {
            return false;
        }
    }
    if (n > 1) {
        return true;
    }
}
isPrime();
