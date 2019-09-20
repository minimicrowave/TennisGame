const GameService = require('./services/game');
const { Player } = require('./models');
const { DEFAULT_NAMES } = require('./constants');

class TennisGame {
    constructor() {
        this.playerOne = new Player(DEFAULT_NAMES.PLAYER_ONE);
        this.playerTwo = new Player(DEFAULT_NAMES.PLAYER_TWO);
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
