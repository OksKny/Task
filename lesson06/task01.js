'use strict';

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];
let result;

const filter = (arr, arr2) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!arr2.includes(arr[i])) {
            result.push(arr[i]);
        }
    }

    return result;

};

result = filter(allStudents, failedStudents);

console.log(filter(allStudents, failedStudents));
console.log('allStudents:', allStudents);
console.log('failedStudents:', failedStudents);




