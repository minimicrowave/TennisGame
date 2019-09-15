const formatter = require('../../formatter');
const DEUCE_POINTS = 3;

function calculateScore(playerOnePoints, playerTwoPoints) {
    if (isDeuce(playerOnePoints, playerTwoPoints)) return formatter.formatDeuce();
    else if (isDraw(playerOnePoints, playerTwoPoints)) return formatter.formatDrawScore(playerOnePoints);
    else return formatter.formatScore(playerOnePoints, playerTwoPoints);
}

function isDeuce(playerOnePoints, playerTwoPoints) {
    return playerOnePoints === playerTwoPoints && playerOnePoints >= DEUCE_POINTS;
}

function isDraw(playerOnePoints, playerTwoPoints) {
    return playerOnePoints === playerTwoPoints;
}

module.exports = {
    calculateScore
};
