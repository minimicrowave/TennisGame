const VERBAL_POINTS = ['love', 'fifteen'];

function calculateScore(playerOnePoints, playerTwoPoints) {
    if (isDraw(playerOnePoints, playerTwoPoints)) {
        return `${VERBAL_POINTS[playerOnePoints]} all`;
    }
    return `${VERBAL_POINTS[playerOnePoints]}, ${VERBAL_POINTS[playerTwoPoints]}`;
}

function isDraw(playerOnePoints, playerTwoPoints) {
    return playerOnePoints === playerTwoPoints;
}

module.exports = {
    calculateScore
};
