const formatter = require('../../formatter');
const DEUCE_POINTS = 3;

function calculateScore(playerOne, playerTwo) {
    const playerOnePoints = playerOne.getPoints();
    const playerTwoPoints = playerTwo.getPoints();

    if (isAdvantage(playerOnePoints, playerTwoPoints))
        return formatter.formatAdvantage(getLeadingPlayerName(playerOne, playerTwo));
    else if (isDeuce(playerOnePoints, playerTwoPoints)) return formatter.formatDeuce();
    else if (isDraw(playerOnePoints, playerTwoPoints)) return formatter.formatDrawScore(playerOnePoints);
    else return formatter.formatScore(playerOnePoints, playerTwoPoints);
}

function getLeadingPlayerName(playerOne, playerTwo) {
    return playerOne.getPoints() > playerTwo.getPoints() ? playerOne.getName() : playerTwo.getName();
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
