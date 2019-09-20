const GameService = require('./services/game');
const { Player } = require('./models');
const { DEFAULT_NAMES } = require('./constants');

class TennisGame {
    constructor(playerOneName, playerTwoName) {
        this.playerOne = new Player(playerOneName || DEFAULT_NAMES.PLAYER_ONE);
        this.playerTwo = new Player(playerTwoName || DEFAULT_NAMES.PLAYER_TWO);
        this.gameService = new GameService();
    }

    addPointToPlayerOne() {
        this.playerOne.addPoint();
    }

    addPointToPlayerTwo() {
        this.playerTwo.addPoint();
    }

    score() {
        return this.gameService.calculateScore(this.playerOne, this.playerTwo);
    }
}

module.exports = TennisGame;
