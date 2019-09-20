const POINTS = {
    DEUCE: 3,
    WIN: 4,
    DIFFERENCE: {
        ADVANTAGE: 1,
        WIN: 2
    }
};

const DEFAULT_NAMES = {
    PLAYER_ONE: 'Player 1',
    PLAYER_TWO: 'Player 2'
};

const VERBAL_SCORES = {
    ADVANTAGE: 'advantage',
    DEUCE: 'deuce!',
    LIST: ['love', 'fifteen', 'thirty', 'forty'],
    WIN: 'Game'
};

module.exports = {
    DEFAULT_NAMES,
    POINTS,
    VERBAL_SCORES
};
