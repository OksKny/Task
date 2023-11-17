'use strict';

(() => {
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const game = () => {
    const balls = {
      playerBall: 5,
      botBall: 5,
    };
    let step = true;

    const getBallsCount = () => {
      if (balls.playerBall < 0) {
        balls.playerBall = 0;
      }
      if (balls.playerBall > 10) {
        balls.playerBall = 10;
      }
      if (balls.botBall < 0) {
        balls.botBall = 0;
      }
      if (balls.botBall > 10) {
        balls.botBall = 10;
      }
      alert(`
      Количество шариков:
      Игрок: ${balls.playerBall}
      Бот: ${balls.botBall}`);
    };

    const playerGame = () => {
      const tempPlayer =
      prompt(`Твой ход\nВведи число от 1 до ${balls.playerBall}`);

      if (tempPlayer === null) {
        step = false;
        return;
      }

      const playerPrompt = +tempPlayer;

      if (!Number.isInteger(playerPrompt) ||
      playerPrompt > Math.min(balls.playerBall,
          10 - balls.botBall) || playerPrompt <= 0) {
        alert('Введи другое число');
        playerGame();
        return;
      }

      const player = playerPrompt % 2 === 0;
      const bot = getRandomInt(0, 1) === 0;

      const takenBalls = Math.min(playerPrompt, balls.playerBall,
          10 - balls.botBall);

      if (bot === player) {
        alert(`Бот угадал и ты отдаешь ему ${takenBalls} шарика(ов)`);
        balls.playerBall -= takenBalls;
        balls.botBall += takenBalls;
      } else {
        alert(`Бот не угадал и отдает тебе ${takenBalls} шарика(ов)`);
        balls.playerBall += takenBalls;
        balls.botBall -= takenBalls;
      }
    };

    const botGame = () => {
      const botNumber =
      getRandomInt(1, Math.min(balls.botBall, 10 - balls.playerBall));
      const player = confirm('Бот загадал число\nУгадай, число четное?');

      const bot = botNumber % 2 === 0;

      const takenBalls = Math.min(botNumber,
          balls.botBall, 10 - balls.playerBall);

      if (player === bot) {
        alert(`Ты угадал и получаешь ${takenBalls} шарика(ов)`);
        balls.playerBall += takenBalls;
        balls.botBall -= takenBalls;
      } else {
        alert(`Ты не угадал и отдаешь ${takenBalls} шарика(ов)`);
        balls.playerBall -= takenBalls;
        balls.botBall += takenBalls;
      }
    };

    const start = () => {
      let round = 1;
      let continueGame = true;

      while (balls.playerBall > 0 && balls.botBall >
      0 && step && continueGame) {
        switch (round % 2) {
          case 1:
            playerGame();
            break;
          case 0:
            botGame();
            break;
        }
        getBallsCount();
        round++;

        if (balls.playerBall === 0 || balls.botBall === 0) {
          continueGame = confirm('Сыграем еще?');
          if (continueGame) {
            balls.playerBall = 5;
            balls.botBall = 5;
            step = true;
            round = 1;
          } else {
            alert('Пока! :)');
            return;
          }
        }
      }

      alert('Конец игры');
      alert('Пока! :)');
    };

    return start;
  };

  window.marbls = game;
})();


