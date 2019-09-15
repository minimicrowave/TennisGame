const formatter = require('../../formatter');
const DEUCE_POINTS = 3;
const PLAYER_ONE_NAME = 'Player 1';

function calculateScore(playerOnePoints, playerTwoPoints) {
    if (isFirstPlayerAdvantage(playerOnePoints, playerTwoPoints)) return formatter.formatAdvantage(PLAYER_ONE_NAME);
    else if (isDeuce(playerOnePoints, playerTwoPoints)) return formatter.formatDeuce();
    else if (isDraw(playerOnePoints, playerTwoPoints)) return formatter.formatDrawScore(playerOnePoints);
    else return formatter.formatScore(playerOnePoints, playerTwoPoints);
}

function isFirstPlayerAdvantage(playerOnePoints, playerTwoPoints) {
    return (
        playerOnePoints >= DEUCE_POINTS &&
        playerTwoPoints >= DEUCE_POINTS &&
        playerOnePoints + playerTwoPoints > DEUCE_POINTS + DEUCE_POINTS
    );
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
