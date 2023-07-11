'use strict';

function caseChange(str) {
    if(!str) return str;
    return str[0].toUpperCase() + str.slice(1).toLowerCase()
}

console.log(caseChange('привет Мир'));


