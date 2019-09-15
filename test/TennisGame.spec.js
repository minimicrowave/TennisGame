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

        it('should return "fifteen all" after both players score a point', () => {
            const game = new TennisGame();
            game.addPointToPlayerOne();
            game.addPointToPlayerTwo();
            expect(game.score()).to.equal('fifteen all');
        });

        it('should return "thirty love" if after player 1 scores 2 points', () => {
            const game = new TennisGame();
            game.addPointToPlayerOne();
            game.addPointToPlayerOne();
            expect(game.score()).to.equal('thirty, love');
        });

        it('should return "love, forty" if after player 2 scores 3 points', () => {
            const game = new TennisGame();
            game.addPointToPlayerTwo();
            game.addPointToPlayerTwo();
            game.addPointToPlayerTwo();
            expect(game.score()).to.equal('love, forty');
        });
    });
});
