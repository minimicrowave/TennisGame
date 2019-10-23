const { arraySortByAscending } = require('../utils');
const {
	SCORE_NAME_MAP,
	DEUCE_TEXT,
	ADVANTAGE_TEXT,
	WINNING_SCORE,
	DEUCE_SCORE_DIFFERENCE,
	DEUCE_SCORE_MINIMUM
} = require('../consts');

class ScoreBoard {
	constructor(playerOne, playerTwo, isDeuce) {
		this.playerOne = playerOne;
		this.playerTwo = playerTwo;
		this.isDeuce = isDeuce;
	}

	compute() {
		let playerOneScore = this.playerOne.score;
		let playerTwoScore = this.playerTwo.score;

		if (this.isSameScore()) {
			if (playerOneScore >= DEUCE_SCORE_MINIMUM) {
				this.isDeuce = true;
				return DEUCE_TEXT;
			} else {
				return `${SCORE_NAME_MAP[playerOneScore]} all`;
			}
		} else if (this.isDeuce) {
			return `${ADVANTAGE_TEXT} ${this.hasMoreScore()}`;
		} else {
			return `${SCORE_NAME_MAP[playerOneScore]}, ${SCORE_NAME_MAP[playerTwoScore]}`;
		}
	}

	isWin() {
		let [ lowerScore, higherScore ] = arraySortByAscending([
			this.playerOne.score,
			this.playerTwo.score
		]);

		if (higherScore >= WINNING_SCORE && higherScore - lowerScore >= DEUCE_SCORE_DIFFERENCE)
			return true;
		return false;
	}

	isSameScore() {
		return this.playerOne.score === this.playerTwo.score;
	}

	hasMoreScore() {
		return this.playerOne.score > this.playerTwo.score ? this.playerOne.name : this.playerTwo.name;
	}

	getScore() {
		if (this.isWin()) {
			return `Game, ${this.hasMoreScore()}`;
		}
		return this.compute();
	}
}

module.exports = ScoreBoard;
