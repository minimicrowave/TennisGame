const TennisGame = require('../src/TennisGame');
const { expect } = require('chai');

describe('TennisGame', () => {
    describe('.score()', () => {
        it('should return "love all" right after initialization', () => {
            const game = new TennisGame();
            expect(game.score()).to.equal('love all');
        });
    });
});
