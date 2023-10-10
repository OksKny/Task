'use strict';

(() => {
    const FIGURES_ENG = ['rock', 'scissors', 'paper'];
    const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

    const getRandomIntInclusive = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    const getFigure = (lang) => {
        const figures = lang === 'ENG' || lang === 'EN' ? 
        FIGURES_ENG : FIGURES_RUS;

        const findAnswer = (arr, n) => {
            for (let i = 0; i < arr.length; ++i) {
                if (arr[i].indexOf(n) === 0) {
                    return arr[i];
                }
            }
            return false;
        };

        const answer = prompt(`Выбери: "${figures.join('", "')}"?`); 

        if (answer === null) {
            return null;
        }

        const userChoice = findAnswer(figures, answer.toLowerCase()); 
        return userChoice;
    };
    
    const game = (language) => {
        const result = {
            player: 0,
            computer: 0,
        };
        const lang = language === 'ENG' ||  language === 'EN' ? 
        FIGURES_ENG : FIGURES_RUS;
        let roundCount = 0;
    
        return function start() {
            const computerChoice = lang[getRandomIntInclusive(0, 2)]; 

            const userChoice = getFigure(language); 
    
            if (userChoice === null) {
                const wantsToExit = confirm("Вы точно хотите выйти?");
                if (wantsToExit) {
                    alert(
                        `Итоговый результат:
                        Игрок: ${result.player}
                        Компьютер: ${result.computer}`
                        );
                    return;
                } else {
                    start();
                }
            }
    
    
            let roundResult = '';
            switch (userChoice) {
                case computerChoice:
                    roundResult = 'Ничья';
                    break;
                case 'камень':
                    roundResult = computerChoice === 'ножницы' ? 
                    'Вы выиграли' : 'Выиграл компьютер';
                    break;
                case 'ножницы':
                    roundResult = computerChoice === 'бумага' ? 
                    'Вы выиграли' : 'Выиграл компьютер';
                    break;
                case 'бумага':
                    roundResult = computerChoice === 'камень' ? 
                    'Вы выиграли' : 'Выиграл компьютер';
                    break;
                default:
                    roundResult = 'Неизвестный выбор';
            }
            roundCount++;

            alert(
            `${roundResult}
            Игрок: ${userChoice}
            Компьютер: ${computerChoice}`
            );
    
            if (roundResult === 'Вы выиграли') {
                result.player++;
            } else if (roundResult === 'Выиграл компьютер') {
                result.computer++;
            }
    
            start(); 
          
        };
    };
    

    window.rps = game;
})();