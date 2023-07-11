'use strict';


const getInitialValue = +(prompt('Напишите стоимость покупки:'));
function converter() {
    const usd = 73;
    const eur_rub = 1.2;
    
    console.log(`${(getInitialValue / eur_rub) * usd}`);
}

converter();






