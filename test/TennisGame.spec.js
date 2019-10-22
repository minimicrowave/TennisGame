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
		it('Should return "love" if score is (0, 0).', () => {
			const tennisGame = new TennisGame();
			expect(tennisGame.tallyScore()).to.equal('love');
			expect(tennisGame.tallyScore(0, 0)).to.equal('love');
		});

		it('Should return "fifteen" if score is (1, 1).', () => {
			const tennisGame = new TennisGame();
			const tennisGame1 = new TennisGame(1, 1);
			tennisGame.addScoreToPlayerOne();
			tennisGame.addScoreToPlayerTwo();

			expect(tennisGame.tallyScore()).to.equal('fifteen');
			expect(tennisGame1.tallyScore()).to.equal('fifteen');
    });
    
		it('Should return "thirty" if score is (2, 2).', () => {
			const tennisGame = new TennisGame();
			const tennisGame1 = new TennisGame(2, 2);
			tennisGame.addScoreToPlayerOne();
			tennisGame.addScoreToPlayerOne();
			tennisGame.addScoreToPlayerTwo();
			tennisGame.addScoreToPlayerTwo();

			expect(tennisGame.tallyScore()).to.equal('thirty');
			expect(tennisGame1.tallyScore()).to.equal('thirty');
    });
    
		it('Should return "thirty" if score is (3, 3).', () => {
			const tennisGame = new TennisGame();
			const tennisGame1 = new TennisGame(3, 3);
			tennisGame.addScoreToPlayerOne();
			tennisGame.addScoreToPlayerOne();
			tennisGame.addScoreToPlayerOne();
			tennisGame.addScoreToPlayerTwo();
			tennisGame.addScoreToPlayerTwo();
			tennisGame.addScoreToPlayerTwo();

			expect(tennisGame.tallyScore()).to.equal('forty');
			expect(tennisGame1.tallyScore()).to.equal('forty');
		});
	});
});
