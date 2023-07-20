'use strict';

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];
const namesMr = [];

const addPrefix = (names, Mr) => {
    for(let i = 0; i < names.length; i++) {
        namesMr[i] = 'Mr ' + names[i];
    }
};

addPrefix(names);

console.log(namesMr);
