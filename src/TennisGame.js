const { gameService } = require('./services');

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
        return gameService.calculateScore(this.playerOnePoints, this.playerTwoPoints);
    }
}

module.exports = TennisGame;
