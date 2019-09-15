const ZERO_POINTS = 'love';
const ONE_POINT = 'fifteen';
class TennisGame {
    constructor() {
        this.playerOnePoints = 0;
        this.playerTwoPoints = 0;
    }

    addPointToPlayerOne() {
        this.playerOnePoints++;
    }

    score() {
        if (!this.isDraw()) {
            return `${ONE_POINT}, ${ZERO_POINTS}`;
        }
        return `${ZERO_POINTS} all`;
    }

    isDraw() {
        return this.playerOnePoints === this.playerTwoPoints;
    }
}

module.exports = TennisGame;
