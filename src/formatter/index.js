const POINTS_TO_SCORE = ['love', 'fifteen', 'thirty', 'forty'];
const DEUCE_SCORE = 'deuce';

function formatDeuce() {
    return DEUCE_SCORE;
}

function formatDrawScore(playersPoints) {
    return `${POINTS_TO_SCORE[playersPoints]} all`;
}

function formatScore(playerOnePoints, playerTwoPoints) {
    return `${POINTS_TO_SCORE[playerOnePoints]}, ${POINTS_TO_SCORE[playerTwoPoints]}`;
}

module.exports = {
    formatDeuce,
    formatDrawScore,
    formatScore
};
