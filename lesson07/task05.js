const generateArray = (length, n, m, parity) => { 
    let array = []; 
    let min = Math.min(n, m); 
    let max = Math.max(n, m); 
    let even = [];
    let odd = [];


    for(let i = 0; i < length; i++) { 
        let randomNumber =  Math.round(Math.random() * (max - min + 1) + min); 
        array.push(randomNumber); 
    

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            even.push(array[i]);
        } else {
            odd.push(array[i]);
        }
    }
        
        if (parity === 'even') {
            return even;
        } else {
            return odd;
        }
    }
        
    return array; 
} 


console.log(generateArray(14, 4, 20, 'odd')); 