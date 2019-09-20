const { VERBAL_SCORES } = require('../constants');
const { ADVANTAGE, DEUCE, LIST, WIN } = VERBAL_SCORES;

function win(winningPlayerName) {
    return `${WIN}, ${winningPlayerName}`;
}

function advantage(playerWithAdvantage) {
    return `${ADVANTAGE}, ${playerWithAdvantage}`;
}

function deuce() {
    return DEUCE;
}

function draw(playersPoints) {
    return `${LIST[playersPoints]} all`;
}

function score(playerOnePoints, playerTwoPoints) {
    return `${LIST[playerOnePoints]}, ${LIST[playerTwoPoints]}`;
}

module.exports = {
    advantage,
    deuce,
    draw,
    score,
    win
};
