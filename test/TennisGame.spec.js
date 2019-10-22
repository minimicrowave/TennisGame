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
	describe('Check for equal score between players', () => {
		let tennisGame = new TennisGame();
		it('Should return "hello, 0, 0" if no input is entered.', () => {
			expect(tennisGame.tallyScore()).to.equal('hello, 0, 0');
		});
	});
});
