(() => {
    const FIGURES_ENG = ['rock', 'scissors', 'paper'];
    const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

    const getRandomIntInclusive = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

        const findIndexOfAnswer = (figures, answer) => 
            answer.length ?
                figures.map(figure => figure.slice(0, answer.length))
                    .indexOf(answer) : -1;

        const getFigure = (figures) => {

            const answer = prompt(`Выбери: "${figures.join('", "')}"?`);

        if (answer === null) {
            return null;
        }

        return findIndexOfAnswer(figures, answer.toLowerCase().trim());

    };

    const game = (language) => {
        let roundCount = 0;
        const result = {
            player: 0,
            computer: 0,
        };

        const figures = language === 'ENG' || language === 'EN' ? FIGURES_ENG : FIGURES_RUS;
        

        return function start() {
            let roundResult = '';
            const computerChoice = getRandomIntInclusive(0, 2);
            const userChoice = getFigure(figures);

            
            switch (userChoice) {
                case null:
                    if (confirm("Вы точно хотите выйти?")) {
                        return alert(
                            `Итоговый результат:
                            Игрок: ${result.player}
                            Компьютер: ${result.computer}`);
                    }
                    break;
                case computerChoice:
                    roundResult = 'Ничья';
                    break;
                case (computerChoice + 1) % 3:
                    roundResult = 'Выиграл компьютер';
                    result.computer++;
                    break;
                case (computerChoice + 2) % 3:
                    roundResult = 'Вы выиграли';
                    result.player++;
                    
                    break;
                    default:
                    roundResult = 'Неизвестный выбор';
            }

            if (userChoice !== null && userChoice !== -1) {
                roundCount++;
                alert(
                    `${roundResult}
                    Игрок: ${figures[userChoice]}
                    Компьютер: ${figures[computerChoice]}`);
            }

            start();
        };
    };

    window.rps = game;
})();