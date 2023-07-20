'use strict';

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];
let namesMr;

const addPrefix = (names, prefix = 'Mr') => {
    const namesMr = [];

    for(let i = 0; i < names.length; i++) {
        namesMr[i] = `${prefix} ${names[i]}`;
    }

    return namesMr;
    
};

namesMr = addPrefix(names);
console.log('namesMr:', namesMr);
