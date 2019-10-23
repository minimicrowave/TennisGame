const { expect } = require('chai');
const TennisGame = require('../src/TennisGame');

describe('TennisGame', () => {
	describe('- Error Catching', () => {
		it('Should throw TypeError if score is not a number', () => {
			expect(() => new TennisGame('a', 'b')).to.throw(`Score "a" is not a number.`);
			expect(() => new TennisGame(2, 'b')).to.throw(`Score "b" is not a number.`);
			expect(() => new TennisGame('c', 10)).to.throw(`Score "c" is not a number.`);
		});
	});
	describe('.tally()', () => {
		it('Should return "love all" if score is (0, 0).', () => {
			const tennisGame = new TennisGame();
			expect(tennisGame.tallyScore()).to.equal('love all');
			expect(tennisGame.tallyScore(0, 0)).to.equal('love all');
		});

		it('Should return "fifteen all" if score is (1, 1).', () => {
			const tennisGame = new TennisGame();
			const tennisGame1 = new TennisGame(1, 1);
			tennisGame.addScoreToPlayerOne();
			tennisGame.addScoreToPlayerTwo();

			expect(tennisGame.tallyScore()).to.equal('fifteen all');
			expect(tennisGame1.tallyScore()).to.equal('fifteen all');
		});

		it('Should return "thirty all" if score is (2, 2).', () => {
			const tennisGame = new TennisGame();
			const tennisGame1 = new TennisGame(2, 2);
			tennisGame.addScoreToPlayerOne();
			tennisGame.addScoreToPlayerOne();
			tennisGame.addScoreToPlayerTwo();
			tennisGame.addScoreToPlayerTwo();

			expect(tennisGame.tallyScore()).to.equal('thirty all');
			expect(tennisGame1.tallyScore()).to.equal('thirty all');
		});

		it('Should return "deuce" if score is (3, 3).', () => {
			const tennisGame = new TennisGame();
			const tennisGame1 = new TennisGame(3, 3);
			tennisGame.addScoreToPlayerOne();
			tennisGame.addScoreToPlayerOne();
			tennisGame.addScoreToPlayerOne();
			tennisGame.addScoreToPlayerTwo();
			tennisGame.addScoreToPlayerTwo();
			tennisGame.addScoreToPlayerTwo();

			expect(tennisGame.tallyScore()).to.equal('deuce!');
			expect(tennisGame1.tallyScore()).to.equal('deuce!');
		});

		it('Should return "fifteen, love" if score is (1, 0).', () => {
			const tennisGame = new TennisGame();
			tennisGame.addScoreToPlayerOne();

			expect(tennisGame.tallyScore()).to.equal('fifteen, love');
		});

		it('Should return "love, forty" if score is (0, 3).', () => {
			const tennisGame = new TennisGame();
			tennisGame.addScoreToPlayerTwo();
			tennisGame.addScoreToPlayerTwo();
			tennisGame.addScoreToPlayerTwo();

			expect(tennisGame.tallyScore()).to.equal('love, forty');
		});

		it('Should return "thirty, fifteen" if score is (2, 1).', () => {
			const tennisGame = new TennisGame();
			tennisGame.addScoreToPlayerOne();
			tennisGame.addScoreToPlayerTwo();
			tennisGame.addScoreToPlayerOne();

			expect(tennisGame.tallyScore()).to.equal('thirty, fifteen');
		});
	});
});
