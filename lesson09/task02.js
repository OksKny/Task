'use strict'

function countUnique(listIPv4) {
    const unique = Array.from(new Set(listIPv4)) 
        return Object.keys(unique).length;
   };


   const uniqueCountIP = countUnique(listIPv4);
   console.log(uniqueCountIP);