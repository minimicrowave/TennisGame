const formatter = require('../../formatter');
const DEUCE_POINTS = 3;
const WINNING_POINTS = 4;
const ADVANTAGE_POINT_DIFFERENCE = 1;
const WINNING_POINT_DIFFERENCE = 2;

function calculateScore(playerOne, playerTwo) {
    const playerOnePoints = playerOne.getPoints();
    const playerTwoPoints = playerTwo.getPoints();

    if (isWin(playerOnePoints, playerTwoPoints)) {
        return formatter.formatGameWon(getLeadingPlayerName(playerOne, playerTwo));
    } else if (isAdvantage(playerOnePoints, playerTwoPoints)) {
        return formatter.formatAdvantage(getLeadingPlayerName(playerOne, playerTwo));
    } else if (isDeuce(playerOnePoints, playerTwoPoints)) {
        return formatter.formatDeuce();
    } else if (isDraw(playerOnePoints, playerTwoPoints)) {
        return formatter.formatDrawScore(playerOnePoints);
    }
    return formatter.formatScore(playerOnePoints, playerTwoPoints);
}

function getLeadingPlayerName(playerOne, playerTwo) {
    return playerOne.getPoints() > playerTwo.getPoints() ? playerOne.getName() : playerTwo.getName();
}

function isAdvantage(playerOnePoints, playerTwoPoints) {
    return (
        playerOnePoints >= DEUCE_POINTS &&
        playerTwoPoints >= DEUCE_POINTS &&
        playerOnePoints + playerTwoPoints > DEUCE_POINTS + DEUCE_POINTS &&
        hasPointDifferenceOfAtLeast(playerOnePoints, playerTwoPoints, ADVANTAGE_POINT_DIFFERENCE)
    );
}

function hasPointDifferenceOfAtLeast(playerOnePoints, playerTwoPoints, difference) {
    return Math.abs(playerOnePoints - playerTwoPoints) >= difference;
}

function isDeuce(playerOnePoints, playerTwoPoints) {
    return playerOnePoints === playerTwoPoints && playerOnePoints >= DEUCE_POINTS;
}

function isDraw(playerOnePoints, playerTwoPoints) {
    return playerOnePoints === playerTwoPoints;
}

function isWin(playerOnePoints, playerTwoPoints) {
    return (
        (playerOnePoints >= WINNING_POINTS || playerTwoPoints >= WINNING_POINTS) &&
        hasPointDifferenceOfAtLeast(playerOnePoints, playerTwoPoints, WINNING_POINT_DIFFERENCE)
    );
}

module.exports = {
    calculateScore
};
