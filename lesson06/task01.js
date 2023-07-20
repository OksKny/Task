'use strict';

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

function filter(arr, arr2) {
    for (let i = 0; i < arr.length; i++) {
        let j = arr2.indexOf(arr[i])
        if (j != -1) {
            arr.splice(i, 1);
            arr2.splice(j, 1);
        }
    }

    return arr;
};

filter(allStudents, failedStudents);

console.log(filter(allStudents, failedStudents));
