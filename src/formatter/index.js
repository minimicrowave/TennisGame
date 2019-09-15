const POINTS_TO_SCORE = ['love', 'fifteen', 'thirty', 'forty'];
const DEUCE_SCORE = 'deuce';
const ADVANTAGE_SCORE = 'advantage';

function formatAdvantage(playerWithAdvantage) {
    return `${ADVANTAGE_SCORE}, ${playerWithAdvantage}`;
}

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
    formatAdvantage,
    formatDeuce,
    formatDrawScore,
    formatScore
};
