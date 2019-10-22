const { validateScore } = require('./validation');
const ScoreBoard = require('./scoreboard');
const Player = require('./player');

class TennisGame {
	constructor(playerOneScore = 0, playerTwoScore = 0) {
		validateScore(playerOneScore);
		validateScore(playerTwoScore);

		this.playerOne = new Player(playerOneScore);
		this.playerTwo = new Player(playerTwoScore);
		this.scoreBoard = new ScoreBoard(playerOneScore, playerTwoScore);
	}

	addScoreToPlayerOne() {
        this.playerOne.addScore();
        this.updateScoreBoard();
	}
    
	addScoreToPlayerTwo() {
        this.playerTwo.addScore();
        this.updateScoreBoard();
	}

	updateScoreBoard() {
		this.scoreBoard.update(this.playerOne.score, this.playerTwo.score);
	}

	tallyScore() {
		return this.scoreBoard.retrieve();
	}
}

module.exports = TennisGame;
