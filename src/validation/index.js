const { isNumber } = require('../utils');

function validateScore(score) {
	if (!isNumber(score)) throw new TypeError(`Score "${score}" is not a number.`);
}

module.exports = { validateScore };
