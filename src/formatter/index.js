const VERBAL_POINTS = ['love', 'fifteen', 'thirty', 'forty'];

function formatDrawScore(playersPoints) {
    return `${VERBAL_POINTS[playersPoints]} all`;
}

function formatScore(playerOnePoints, playerTwoPoints) {
    return `${VERBAL_POINTS[playerOnePoints]}, ${VERBAL_POINTS[playerTwoPoints]}`;
}

module.exports = {
    formatDrawScore,
    formatScore
};
