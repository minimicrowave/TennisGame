const { arraySortByAscending } = require('../utils');

const SCORE_NAME_MAP = {
	0: 'love',
	1: 'fifteen',
	2: 'thirty',
	3: 'forty'
};

const DEUCE_SCORE = 'deuce!';

const ADVANTAGE_SCORE = 'advantage';

const WINNING_SCORE = 4;
const DEUCE_SCORE_MINIMUM = 3;
const DEUCE_SCORE_DIFFERENCE = 2;

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
				return DEUCE_SCORE;
			} else {
				return `${SCORE_NAME_MAP[playerOneScore]} all`;
			}
		} else if (this.isDeuce) {
			return `${ADVANTAGE_SCORE} Player ${this.hasMoreScore()}`;
		} else {
			return `${SCORE_NAME_MAP[playerOneScore]}, ${SCORE_NAME_MAP[playerTwoScore]}`;
		}
	}

	isWin() {
		let [ lowerScore, higherScore ] = arraySortByAscending([
			this.playerOne.score,
			this.playerTwo.Score
		]);

		if (higherScore >= WINNING_SCORE && higherScore - lowerScore >= DEUCE_SCORE_DIFFERENCE)
			return true;
		return false;
	}

	isSameScore() {
		return this.playerOne.score === this.playerTwo.score;
	}

	hasMoreScore() {
		return this.playerOne.score > this.playerTwo.score ? 1 : 2;
	}

	getScore() {
		if (this.isWin()) {
			return `Game, Player ${this.hasMoreScore()}`;
		}
		return this.compute();
	}
}

module.exports = ScoreBoard;
