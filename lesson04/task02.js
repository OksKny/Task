'use strict';
const str = 'привет Мир';
const caseChange = (str) => {
    if(!str) return str;

    str = str.trim().toLowerCase();

    return str[0].toUpperCase() + str.slice(1);
}

console.log(caseChange('привет Мир'));


