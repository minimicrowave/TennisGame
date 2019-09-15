const TennisGame = require('../src/TennisGame');
const { expect } = require('chai');

describe('TennisGame', () => {
    describe('.score()', () => {
        it('should return "love all" right after initialization', () => {
            const game = new TennisGame();
            expect(game.score()).to.equal('love all');
        });

        it('should return "fifteen, love" after player 1 scores a point', () => {
            const game = new TennisGame();
            game.addPointToPlayerOne();
            expect(game.score()).to.equal('fifteen, love');
        });
    });
});
