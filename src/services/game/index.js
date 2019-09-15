const formatter = require('../../formatter');

function calculateScore(playerOnePoints, playerTwoPoints) {
    if (isDraw(playerOnePoints, playerTwoPoints)) {
        return formatter.formatDrawScore(playerOnePoints);
    }
    return formatter.formatScore(playerOnePoints, playerTwoPoints);
}

function isDraw(playerOnePoints, playerTwoPoints) {
    return playerOnePoints === playerTwoPoints;
}

module.exports = {
    calculateScore
};
