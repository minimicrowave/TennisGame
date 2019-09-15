const { gameService } = require('./services');
const { Player } = require('./models');
const DEFAULT_NAME_PLAYER_ONE = 'Player 1';
const DEFAULT_NAME_PLAYER_TWO = 'Player 2';

class TennisGame {
    constructor() {
        this.playerOne = new Player(DEFAULT_NAME_PLAYER_ONE);
        this.playerTwo = new Player(DEFAULT_NAME_PLAYER_TWO);
    }

    addPointToPlayerOne() {
        this.playerOne.addPoint();
    }

    addPointToPlayerTwo() {
        this.playerTwo.addPoint();
    }

    score() {
        return gameService.calculateScore(this.playerOne, this.playerTwo);
    }
}

module.exports = TennisGame;
