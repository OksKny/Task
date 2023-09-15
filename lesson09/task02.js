'use strict';

function countUnique(listIPv4) {
  const unique = new Set(listIPv4);
  return unique.size;
}


const uniqueCountIP = countUnique(listIPv4);
console.log(uniqueCountIP);
