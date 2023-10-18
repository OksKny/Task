(() => {
    const FIGURES_ENG = ['rock', 'scissors', 'paper'];
    const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

    const getRandomIntInclusive = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    const getFigure = (lang) => {
        const figures = lang === 'ENG' || lang === 'EN' ? FIGURES_ENG : FIGURES_RUS;

        const findAnswer = (arr, n) => {
            for (let i = 0; i < arr.length; ++i) {
                if (arr[i].indexOf(n) == 0) {
                    return arr[i];
                }
            }
            return false;
        };


        const answer = prompt(`Выбери: "${figures.join('", "')}"?`);

        if (answer === null) {
            return null;
        }

        const userChoice = findAnswer(figures, answer.toLowerCase().trim());
        return userChoice;
    };

    const game = (language) => {
        const result = {
            player: 0,
            computer: 0,
        };
        const lang = language === 'ENG' || language === 'EN' ? FIGURES_ENG : FIGURES_RUS;
        let roundCount = 0;

        return function start() {
            const computerChoice = lang[getRandomIntInclusive(0, 2)];

            const userChoice = getFigure(language);

            if (userChoice === null && confirm("Вы точно хотите выйти?")) {
                return alert(
                        `Итоговый результат:
                        Игрок: ${result.player}
                        Компьютер: ${result.computer}`
                        );
            }

            let roundResult = '';
            switch (lang.indexOf(userChoice)) {
                case lang.indexOf(computerChoice):
                    roundResult = 'Ничья';
                    break;
                case (lang.indexOf(computerChoice) + 1) % 3:
                    roundResult = 'Выиграл компьютер';
                    result.player++;
                    break;
                case (lang.indexOf(computerChoice) + 2) % 3:
                    roundResult = 'Вы выиграли';
                    result.computer++;
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


            start();
        };
    };

    window.rps = game;
})();