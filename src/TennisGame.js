const VERBAL_POINTS = ['love', 'fifteen'];
class TennisGame {
    constructor() {
        this.playerOnePoints = 0;
        this.playerTwoPoints = 0;
    }

    addPointToPlayerOne() {
        this.playerOnePoints++;
    }

    addPointToPlayerTwo() {
        this.playerTwoPoints++;
    }

    score() {
        if (!this.isDraw()) {
            return `${VERBAL_POINTS[this.playerOnePoints]}, ${VERBAL_POINTS[this.playerTwoPoints]}`;
        }
        return `${VERBAL_POINTS[this.playerOnePoints]} all`;
    }

    isDraw() {
        return this.playerOnePoints === this.playerTwoPoints;
    }
}

module.exports = TennisGame;
