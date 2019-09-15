const formatter = require('../../formatter');
const DEUCE_POINTS = 3;
const PLAYER_ONE_NAME = 'Player 1';
const PLAYER_TWO_NAME = 'Player 2';

function calculateScore(playerOnePoints, playerTwoPoints) {
    if (isAdvantage(playerOnePoints, playerTwoPoints)) {
        if (playerOnePoints > playerTwoPoints) {
            return formatter.formatAdvantage(PLAYER_ONE_NAME);
        }
        return formatter.formatAdvantage(PLAYER_TWO_NAME);
    } else if (isDeuce(playerOnePoints, playerTwoPoints)) return formatter.formatDeuce();
    else if (isDraw(playerOnePoints, playerTwoPoints)) return formatter.formatDrawScore(playerOnePoints);
    else return formatter.formatScore(playerOnePoints, playerTwoPoints);
}

function isAdvantage(playerOnePoints, playerTwoPoints) {
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
