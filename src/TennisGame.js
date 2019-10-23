const { validateScore } = require('./validation');
const ScoreBoard = require('./scoreboard');
const Player = require('./player');

const { DEFAULT_PLAYER_ONE_NAME, DEFAULT_PLAYER_TWO_NAME } = require('./consts');

class TennisGame {
	constructor(playerOneScore = 0, playerTwoScore = 0, isDeuce = false) {
		validateScore(playerOneScore);
		validateScore(playerTwoScore);

		this.playerOne = new Player(playerOneScore, DEFAULT_PLAYER_ONE_NAME);
		this.playerTwo = new Player(playerTwoScore, DEFAULT_PLAYER_TWO_NAME);
		this.scoreBoard = new ScoreBoard(this.playerOne, this.playerTwo, isDeuce);
	}

	setPlayerOneName(name) {
		this.playerOne.setName(name);
	}

	setPlayerTwoName(name) {
		this.playerTwo.setName(name);
	}

	addScoreToPlayerOne() {
		this.playerOne.addScore();
	}

	addScoreToPlayerTwo() {
		this.playerTwo.addScore();
	}

	tallyScore() {
		return this.scoreBoard.getScore();
	}
}

module.exports = TennisGame;
