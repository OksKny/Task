'use strict';

const isPrime = (n) => {
    for (let i = 2; i < n; i++) {
        if (!(n % i)) {
            return false;
        }
    }
    
    return n > 1;
    
}
isPrime();
